import "./Skills.css";


function Skills({ skills }) {


return (

<div className="card skills-card">


<h2>
Detected Skills 🧠
</h2>



<div className="skills-container">


{

skills && skills.length > 0 ? (


skills.map((skill,index)=>(


<p

key={index}

className="skill-text"

>

{skill}

</p>


))


)

:

(

<p>
No skills detected
</p>

)


}



</div>



</div>


);


}


export default Skills;