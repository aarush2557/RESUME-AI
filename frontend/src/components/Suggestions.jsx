function Suggestions({suggestions}){


return(

<div className="card">


<h2>
AI Suggestions
</h2>



{

suggestions.length > 0 ?


suggestions.map((item)=>(

<p key={item}>
• {item}
</p>


))


:

<p>
AI suggestions will appear here
</p>


}



</div>


)


}


export default Suggestions;