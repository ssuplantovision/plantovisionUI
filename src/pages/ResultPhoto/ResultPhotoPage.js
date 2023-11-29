import React, {useEffect, useState, useRef  } from 'react';
import {Navigate  } from "react-router-dom";
import '../PhotoUpload/PhotoUpload.css';
import { useSelector, useDispatch } from 'react-redux';
import { postphoto, getResultPhoto } from '../../features/user';
import Layout from '../../components/Layout';
import '../ResultPhoto/ResultPhotoPage.css';


function ResultPhotoPage() {
  const dispatch = useDispatch();
  const {isAuthenticated,loading, user, posting_photo, sec_ident, sec_passwof, users_result_photo } = useSelector(state => state.user);
  
  useEffect(() => {
    dispatch(getResultPhoto({ photo_pers_identifier: sec_ident, photo_secure_number: sec_passwof }));
	}, []);
  
  if (!isAuthenticated && !loading && user === null) {
    return <Navigate to="/login" />;
  }
  
  
    return(
        <Layout title='Загрузка фото' content='Login page'>       
        <div className='Photo_center' >
        {users_result_photo && users_result_photo.map((photo, index) => (
            <div key={photo.user_photo}>
        {/* Коэффициент K - индекс распластанности переднего отдела стопы */}
        {/* Коэффициент I - индекс Штритера */}
        {/* Коэффициент Альфа  - отклонение первого пальца*/}
        {/*  */}
        <div className='vw-100 app_up_block_Photo'>
        <h1 className='h1'>Результат исследований</h1>
            <h3 style={{fontSize:"30px"}}>Дата загрузки исследования: &nbsp;<span> {photo.date_upload};</span></h3>
            <h3 style={{fontSize:"30px"}}>Итоговый результат: &nbsp;<span> {photo.preview_result};</span></h3>
            <h3 style={{fontSize:"30px", lineClamp:"3"}}>Коэффициент продольного плоскостопия: &nbsp;<span>{photo.coeficientcommont};</span></h3>
            <h3 style={{fontSize:"30px"}}>Коэффициент распластанности верхнего отдела стопы: &nbsp;<span>{photo.coeficientK};</span></h3>
            <h3 style={{fontSize:"30px"}}> Индекс Вальгуса: &nbsp;<span> {photo.coefficient_alpha};</span></h3>
            <h3 style={{fontSize:"30px"}}> Индекс Штритера : &nbsp;<span> {photo.coeficientI};</span></h3>
            <h3 style={{fontSize:"30px"}}>Пояснения:</h3>
            <h3 style={{fontSize:"30px"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{photo.result_view}</span></h3>
            <h3 style={{fontSize:"25px"}}>Номер и Код исследования для поиска: &nbsp;<span style={{color:"black"}}>{photo.photo_pers_identifier}</span>#<span style={{color:"black"}}>{photo.photo_secure_number}</span></h3>
            <h1 className='h1 mt-5'>Снимки результатов</h1>
            </div >
            <div className='Profile_Result_div mb-5'>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img className='Profile_Result_image'
              src={`http://localhost:8000${photo.user_photo_first}`}
            />
            <p style={{fontSize:"3vh", color:"white"}}>Индекс распластанности</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <img className='Profile_Result_image'
              src={`http://localhost:8000${photo.user_photo_second}`}
              alt='Индекс Штритера'
            />
            <p style={{fontSize:"3vh", color:"white"}}>Индекс Штритера</p>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
             <img className='Profile_Result_image'
              src={`http://localhost:8000${photo.user_photo_third}`}
            />
            <p style={{fontSize:"3vh", color:"white"}}>Продольное плоскостопие</p>
            </div>
            </div>
            </div>
        ))}
        </div>
      
        </Layout>
    );
}
export default ResultPhotoPage;
