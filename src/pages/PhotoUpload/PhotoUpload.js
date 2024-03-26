import React, { useState, useRef  } from 'react';
import { useNavigate, Navigate  } from "react-router-dom";
import '../PhotoUpload/PhotoUpload.css';
import yourImage from '../../assets/images/exs1.png';
import yourImage1 from '../../assets/images/exs2.png';
import { useSelector, useDispatch } from 'react-redux';
import { postphoto, getPhoto } from '../../features/user';
import Layout from '../../components/Layout';

import { Link } from "react-router-dom";
import { fireEvent } from '@testing-library/react';
// import { channel } from 'diagnostics_channel';
function PhotoUpload() {

  const dispatch = useDispatch();
  const { isAuthenticated, user,loading, posting_photo,users_photo } = useSelector(state => state.user);
  const [formData, setFormData] = useState({
    user_photo: null,
  });

  const {user_photo } = formData;
  if (!isAuthenticated && !loading && user === null) {
    return <Navigate to="/login" />;
  }
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const user_name = user.id;
    console.log(user_name, user_photo);
    dispatch(postphoto({ user_name, user_photo }));
    console.log(posting_photo);
    // window.location.reload();
  };

    return(
        <Layout title='Загрузка фото' content='Login page'>       
        <div className='Photo_center' >
          <div className='vw-100 app_up_block_Photo'>
            <h1 className='h1'>Добавление нового исследования</h1>
            <h3>Перед тем, как добавить новое исследование внимательно прочитайте инструкцию, чтобы оплучить более точный результат:</h3>
            <h3>1. Снимок долежн быть сделан на плантоскопе.</h3>
            <h3>2. На снимке должны быть видны ваши стопы под углом в 90 градусов.</h3>
            <h3>3. Снимок должен быть достаточно хорошего качества, так как от него зависит результат.</h3>
            <h3>После загрузки вашего изображения, результат появится в вашем личном кабинете, где вы сможете полностью посмотреть результат с пояснением. Приятного использования!</h3>
          </div>
          <div className='form-group'>
                <label className='AddPhotoButton'>
                  Добавить фотографию
                  <input
                    type='file'
                    id='user_photo'
                    name='user_photo'
                    accept='image/*'
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              {formData.user_photo && (
                <div>
                <div className='photo-preview'>
                  <img
                    src={URL.createObjectURL(formData.user_photo)}
                    alt='Превью фотографии'
                    className='photo_preview'
                    
                  />
                   
                </div>
                <button type='submit' className='AddPhotoButton' style={{width:"100%", fontSize:"3vh"}}onClick={onSubmit}>Сохранить</button>
                </div>
              )}
        </div>
      
        </Layout>
    );
}
export default PhotoUpload;
