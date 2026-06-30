import { useState } from "react";
import axios from "axios";


function UploadResume({ setResult }) {


  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [dragActive, setDragActive] = useState(false);



  // Select file
  const selectFile = (selectedFile) => {


    if (!selectedFile) return;



    if (selectedFile.type !== "application/pdf") {

      setStatus("Only PDF files are allowed");

      return;

    }



    setFile(selectedFile);

    setStatus("Resume ready to analyze ✔");


  };




  // Click upload
  const handleChange = (e) => {

    selectFile(e.target.files[0]);

  };





  // Drag over
  const handleDragOver = (e) => {

    e.preventDefault();

    setDragActive(true);

  };





  // Leave box
  const handleDragLeave = () => {

    setDragActive(false);

  };





  // Drop file
  const handleDrop = (e) => {


    e.preventDefault();


    setDragActive(false);


    const droppedFile = e.dataTransfer.files[0];


    selectFile(droppedFile);


  };







  // Send to backend
  const analyzeResume = async () => {



    if (!file) {


      setStatus("Please upload resume first");


      return;


    }




    const formData = new FormData();


    formData.append(
      "resume",
      file
    );




    try {



      setLoading(true);


      setStatus(
        "Analyzing resume with AI..."
      );




      const response = await axios.post(

        "https://resume-ai-1-eurv.onrender.com/upload",

        formData

      );





      console.log(
        response.data
      );





      if(setResult){

        setResult(response.data);

      }




      setStatus(
        "Analysis complete ✔"
      );




    }

    catch(error){



      console.log(
        "UPLOAD ERROR:",
        error
      );



      if(error.response){


        setStatus(
          error.response.data.message
        );


      }

      else{


        setStatus(
          "Backend not connected"
        );


      }




    }


    finally{


      setLoading(false);


    }



  };







  return (



    <div className="upload">



      <h2>
        Upload Your Resume
      </h2>





      <input


        id="resumeUpload"


        type="file"


        accept=".pdf"


        hidden


        onChange={handleChange}


      />






      <label



        htmlFor="resumeUpload"



        className={

          dragActive

          ?

          "custom-upload active"

          :

          "custom-upload"

        }




        onDragOver={handleDragOver}


        onDragLeave={handleDragLeave}


        onDrop={handleDrop}




      >




        <div className="upload-icon">

          📄

        </div>





        {


        file


        ?


        <p>

        {file.name}

        </p>



        :



        <>


        <p>

        Drag & Drop your resume here

        </p>



        <span>

        or click to browse

        </span>


        </>



        }



      </label>







      <p className="status">

        {status}

      </p>






      <button

      onClick={analyzeResume}


      disabled={loading}


      >




      {


      loading


      ?


      "Analyzing..."


      :


      "Analyze Resume"



      }





      </button>





    </div>



  );


}



export default UploadResume;