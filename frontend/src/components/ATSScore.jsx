import "./ATSScore.css";


function ATSScore({ score }) {


const atsScore = score || 0;



let message = "";



if(atsScore < 40){

message = "Needs improvement";

}

else if(atsScore < 70){

message = "Good but can be improved";

}

else if(atsScore < 90){

message = "Strong resume";

}

else{

message = "Excellent ATS score";

}





return (

<div className="card ats-card">


<h2>
ATS Score 📊
</h2>



<div className="meter">


<div

className="meter-fill"

style={{

width:`${atsScore}%`

}}

>


</div>


</div>





<h1>

{atsScore}%

</h1>




<p>

{message}

</p>



</div>


);

}


export default ATSScore;