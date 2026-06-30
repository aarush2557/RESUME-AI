import { useState } from "react";


function JobMatcher({resumeData}){


const [jobDesc,setJobDesc] = useState("");

const [score,setScore] = useState(null);

const [matched,setMatched] = useState([]);

const [missing,setMissing] = useState([]);



const matchJob = ()=>{


if(!resumeData || !resumeData.skills){

setScore(0);

return;

}



const resumeSkills = resumeData.skills.map(

skill=>skill.toLowerCase()

);



const jobWords = jobDesc

.toLowerCase()

.replace(/[.,()]/g,"")

.split(" ");




// find skills from resume that appear in JD

const matchedSkills = resumeSkills.filter(

skill =>

jobWords.includes(skill)

);




// skills from resume missing in JD

const missingSkills = resumeSkills.filter(

skill =>

!jobWords.includes(skill)

);



const matchPercentage = Math.round(

(matchedSkills.length / resumeSkills.length) * 100

);



setScore(matchPercentage);

setMatched(matchedSkills);

setMissing(missingSkills);


};




return(


<div className="card">


<h2>

Job Match Score 🎯

</h2>



<textarea

placeholder="Paste Job Description"

value={jobDesc}

onChange={(e)=>setJobDesc(e.target.value)}

/>



<button onClick={matchJob}>

Check Match

</button>




{

score !== null &&

<>


<div className="match-score">

<h1>

{score}%

</h1>

<p>

Resume - Job Compatibility

</p>


</div>




<h3>
Matched Skills
</h3>


{

matched.map(skill=>(

<p key={skill}>

✅ {skill}

</p>

))

}





<h3>
Missing Skills
</h3>



{

missing.map(skill=>(

<p key={skill}>

❌ {skill}

</p>

))

}



</>


}



</div>


)


}



export default JobMatcher;