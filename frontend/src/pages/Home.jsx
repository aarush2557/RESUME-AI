import {useState} from "react";

import Navbar from "../components/Navbar";
import UploadResume from "../components/UploadResume";
import ATSScore from "../components/ATSScore";
import Skills from "../components/Skills";
import Suggestions from "../components/Suggestions";
import Interview from "../components/Interview";
import JobMatcher from "../components/JobMatcher";



function Home(){


const [result,setResult] = useState(null);



return(

<>


<Navbar/>


<h1 className="title">

AI Resume Analyzer & Career Assistant 🚀

</h1>



<UploadResume

setResult={setResult}

/>




<div className="dashboard">


<ATSScore

score={result?.score || 0}

/>



<Skills

skills={result?.skills}

/>



<Suggestions

suggestions={result?.suggestions || []}

/>



<JobMatcher

resumeData={result}

/>



<Interview/>


</div>



</>


)


}



export default Home;