import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <h3>Плоскостопие – это проблема, возникающая из-за ослабления связок и мышц, поддерживающих арку стопы. Это может вызывать дискомфорт, боль и усталость ног.</h3>
            
        </div>
        <div className='app_middle_block'>
          
            <div className='app_middle_block_info'>
              <div className='app_meddle_block_info_img' id='info_photo_1'/>
              <h1>Плоскостопие может возникнуть из-за наследственных факторов, избыточного веса, длительной нагрузки на ноги, неподходящей обуви или травм.</h1>
            </div>
            <div className='app_middle_block_info'>
              <div className='app_meddle_block_info_img' id='info_photo_2'/>
              <h1>Чтобы определить плоскостопие обратитесь к ортопеду или проведите самодиагностику методом «мокрой ноги», сравнив отпечатки стоп с эталонными образцами.</h1>
            </div>
            <div className='app_middle_block_info'>
              <div className='app_meddle_block_info_img' id='info_photo_3'/>
              <h1>Но не всегда вы самостоятельно сможете верно определить свою болезнь, а поход к специалисту может стоит дорого, что в дальнейшем может привести к осложнениям.</h1>
            </div>
        </div>
            <div className='app_bottom_block'>
              <div className='app_bottom_block_up'>
              <div className='app_middle_block_info' id='app_bottom'>
                <div className='app_meddle_block_info_img' id='info_photo_4'/>
                <h1>С помощью использовния алгоритмов компьютерного зрения и нейронной сети, данный сервис способен диагностировать патологии стопы.</h1>
              </div>
              <div className='app_middle_block_info'id='app_bottom'>
                <div className='app_meddle_block_info_img' id='info_photo_5'/>
                <h1>Чтобы узнать результаты, вам необходимо сделать снимок вашей стопы на плантоскоп, после чего загрузить его в личном кабинете для получения результата.</h1>
              </div>
              <div className='app_middle_block_info'id='app_bottom'>
                <div className='app_meddle_block_info_img' id='info_photo_6'/>
                <h1>Не стоит забывать про здоровье ног, ведь только ноги смогут привести вас к будущему!</h1>
              </div>
            </div>
            <div className='app_bottom_block_down'>
                <h1>Готовы сделать шаг в лучшее будущее? Получите доступ к результатам своих тестов или загрузите новые изображения для диагностики!</h1>
                <div className='navlink_bottom'>
                  <NavLink className='nav-link active text-white login_link' to='/login'>
                  Войти
                </NavLink>
                <NavLink className='nav-link active text-white register_link' to='/register'>
                  Зарегистрироваться
                </NavLink>
              </div>
            </div>
        </div>
      </div>
  </Layout>
  );
}

export default Home;
