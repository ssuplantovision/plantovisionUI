import React from 'react';
import { useNavigate  } from "react-router-dom";
import Layout from '../../components/Layout';


function Home() {

  let navigate = useNavigate();
  const getBackPage = () =>{
      navigate(-1)
    
  }



  return (
    <Layout title='Главная' content='Home page'>
    <h1 className='mb-5'>Auth Site</h1>
    <p>Welcome to Auth Site!</p>
  </Layout>
  );
}

export default Home;
