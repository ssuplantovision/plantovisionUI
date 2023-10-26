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
        
        <div className='vw-100 app_up_block_Photo'>
        <h1 className='h1'>Результат исследований</h1>
            <h3>Дата загрузки исследования: <span> {photo.date_upload};</span></h3>
            <h3>Итоговый результат: <span> {photo.preview_result};</span></h3>
            <h3>Пояснения:</h3>
            <h3><span>{photo.result_view}</span></h3>
            <h3>Номер и Код исследования для поиска: <span style={{color:"black"}}>{photo.photo_pers_identifier}</span>#<span style={{color:"black"}}>{photo.photo_secure_number}</span></h3>
            <h1 className='h1 mt-5'>Снимки результатов</h1>
            </div>
            <div className='Profile_Result_div mb-5'>
            <img className='Profile_Result_image'
              src={`http://localhost:8000${photo.user_photo_first}`}
            />
        <img className='Profile_Result_image'
              src={`http://localhost:8000${photo.user_photo_second}`}
            />
            </div>
            </div>
        ))}
        </div>
      
        </Layout>
    );
}
export default ResultPhotoPage;
