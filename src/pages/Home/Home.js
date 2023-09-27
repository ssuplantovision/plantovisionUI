import React from 'react';
import { useNavigate  } from "react-router-dom";
import Layout from '../../components/Layout';
import '../Home/Home.css'

function Home() {




  return (
    <Layout title='Главная' content='Home page'>
      <div className='app_main_block'>
        <div className='vw-100 app_up_block'>
          <h1 className='h1'>Plantovision</h1>
          <h3>Plantovision - это уникальный в своем роде сервис, который поможет вам диагностировать болезни ног, 
            такие как: плоскостопие, отклонение первого пальца и многие другие.</h3>
            <h3>С помозью применение алгоритмов компьютерного зрения и нейронной сети, данный сервис способен диагностировать патологии стопы.</h3>
        </div>
        <div className='app_middle_block'>

        </div>
        <div className='app_bottom_block'>

        </div>
      </div>
  </Layout>
  );
}

export default Home;
