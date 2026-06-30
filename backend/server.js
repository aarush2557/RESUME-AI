const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");


const app = express();


app.use(cors());
app.use(express.json());



const upload = multer({

dest:"uploads/"

});





app.get("/",(req,res)=>{

res.send("Backend connected 🚀");

});







app.post(

"/upload",

upload.single("resume"),


async(req,res)=>{


try{


const buffer = fs.readFileSync(

req.file.path

);



const data = await pdfParse(buffer);



let resumeText = data.text

.toLowerCase()

.replace(/\n/g," ")

.replace(/\s+/g," ");






console.log("RESUME:");

console.log(resumeText);








// =====================
// SKILLS
// =====================


const skillsDatabase=[


"html",
"css",
"javascript",
"typescript",

"react",
"react.js",
"next.js",
"redux",

"tailwind",
"bootstrap",


"node",
"node.js",
"express",

"mongodb",
"mysql",
"sql",
"postgresql",


"python",
"java",
"c++",
"c",


"machine learning",
"artificial intelligence",
"data science",


"git",
"github",
"docker",
"aws",


"data structures",
"algorithms",
"oop",
"dbms",


"figma",
"ui ux",


"testing",
"debugging",

"communication",
"teamwork",
"leadership"


];







const foundSkills = skillsDatabase.filter(skill=>{


return resumeText.includes(skill);


});







// =====================
// REAL ATS SCORE
// =====================


let score = 0;




// 1. Skills 40 marks


let skillScore = Math.min(

foundSkills.length * 5,

40

);


score += skillScore;






// 2. Projects 20 marks


if(

resumeText.includes("project")

||

resumeText.includes("projects")

){


score +=20;


}







// 3. Experience 15 marks


if(

resumeText.includes("experience")

||

resumeText.includes("internship")

||

resumeText.includes("work")

){


score +=15;


}







// 4. Education 10 marks


if(

resumeText.includes("education")

||

resumeText.includes("degree")

||

resumeText.includes("b.tech")

||

resumeText.includes("btech")

){


score +=10;


}







// 5. ATS keywords 15 marks


const keywords=[


"developed",

"created",

"built",

"implemented",

"designed"


];





keywords.forEach(word=>{


if(resumeText.includes(word)){


score +=3;


}


});







score=Math.min(

Math.round(score),

100

);







console.log("ATS SCORE:",score);







res.json({


score:score,


skills:foundSkills.map(

skill=>skill.toUpperCase()

),


suggestions:[


"Add measurable achievements",

"Add more technical keywords",

"Improve project descriptions"


]


});




}



catch(error){


console.log(error);



res.status(500).json({

message:"Resume analysis failed"

});


}


}


);









app.listen(5000,()=>{


console.log(

"Server running on port 5000"

);


});