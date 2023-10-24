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
  const { isAuthenticated, user, posting_photo,users_photo } = useSelector(state => state.user);
  const [formData, setFormData] = useState({
    user_photo: null,
  });

  const {user_photo } = formData;
  
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
  };
  const onGet = e => {
    e.preventDefault();
    dispatch(getPhoto());
  };
    return(
        <Layout title='Загрузка фото' content='Login page'>       
        <div className='Photo_center' >
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


                  {users_photo && users_photo.map(photo => (
      <div key={photo.user_photo}>
        <img
          src={`http://localhost:8000${photo.user_photo}`}
          alt={`Фотография пользователя ${photo.user_name}`}
        />
      </div>
    ))}



              {formData.user_photo && (
                <div className='photo-preview'>
                  <img
                    src={URL.createObjectURL(formData.user_photo)}
                    alt='Превью фотографии'
                    className='photo_preview'
                    
                  />
                </div>
              )}
              <button type='submit' className='SaveButton' onClick={onSubmit}>Сохранить</button>
              <button type='get' className='SaveButton' onClick={onGet}>Загрузить</button>
        </div>
      
        </Layout>
    );
}
export default PhotoUpload;
