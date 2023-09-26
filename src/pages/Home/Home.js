import React from 'react';
import { useNavigate  } from "react-router-dom";
import Layout from '../../components/Layout';
import '../Home/Home.css'

function Home() {




  return (
    <Layout title='Главная' content='Home page'>
      <div className='app_main_block'>
        <div className='vw-100 app_up_block'>

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
