import React from 'react';
import { useNavigate  } from "react-router-dom";


function Login() {

  let navigate = useNavigate();
  const getBackPage = () =>{
      navigate(-1)
    
  }



  return (
    <div onClick={getBackPage} className="App">
      <h1 >HUI</h1>

    </div>
  );
}

export default Login;
