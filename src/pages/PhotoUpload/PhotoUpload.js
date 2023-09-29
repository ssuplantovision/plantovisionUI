import React, { useState, useRef  } from 'react';
import { useNavigate, Navigate  } from "react-router-dom";
import '../PhotoUpload/PhotoUpload.css';
import yourImage from '../../assets/images/exs1.png';
import yourImage1 from '../../assets/images/exs2.png';
import { useSelector, useDispatch } from 'react-redux';
import { resetRegistered, login } from '../../features/user';
import Layout from '../../components/Layout';

import { Link } from "react-router-dom";
// import { channel } from 'diagnostics_channel';
function PhotoUpload() {


    const navigate = useNavigate();
    // Вызовы хуков useState перенесены на верхний уровень
    const [image, setImage] = useState(`url('../../assets/images/mir.jpg'`); // Путь к изображению по умолчанию
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
      Profile_name_input: '',
      Profile_age_input: '',
      photo: null,
    });
    const [imageChange, setImageChange] = useState(yourImage);
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    const [isTestCreate, setisTestCreate] = useState(false);
 
   const { isAuthenticated, user, loading } = useSelector((state) => state.user);
   
 
   if (!isAuthenticated && !loading && user === null) {
     return <Navigate to="/login" />;
   }




    const handleImageChange = (event) => {
        console.log(event.target.files[0])
        if(event.target.files[0] != null){
        const newImage = URL.createObjectURL(event.target.files[0]);
        setImage(newImage);
        }
      };
    
      const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
      };
    
      const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
          // Если выбран файл (фотография), сохраняем его в состоянии
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
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        // Добавьте здесь логику для сохранения данных формы, включая фотографию
        console.log('Данные формы:', formData);
        toggleForm();
      };
      const toggleisTestCreate = () => {
        console.log(formData)
        if(formData.Profile_name_input !=='' && formData.Profile_name_input !==''){
        setisTestCreate(true);
        setFormData({
          Profile_name_input: '',
        Profile_age_input: '',
        photo: null})
        }
      };
      const toggleImageEnlargement = (id) => {
       
        var newImage = ''
        if (id == 'res'){
          newImage = yourImage
        }else {
          newImage = yourImage1
        }
        // const newImage = backgroundImageMap[id] || '/assets/images/res.png';
    
        setImageChange(newImage);
        setIsImageEnlarged(!isImageEnlarged);
      
      };
    
    return(
        <Layout title='Загрузка фото' content='Login page'>
            {isFormVisible && (
        <div className='FormOverlay' onClick={toggleForm}>
          <div className='FormContainer' onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleFormSubmit}>
              <h2>Заполните форму</h2>
              <div className='form-group'>
                <label htmlFor='Profile_name_input'>Имя:</label>
                <input
                  type='text'
                  id='Profile_name_input'
                  name='Profile_name_input'
                  className='logIn_user_name_input'
                  value={formData.Profile_name_input}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='Profile_age_input'>Возраст:</label>
                <input
                  type='text'
                  id='Profile_age_input'
                  name='Profile_age_input'
                  className='Profile_age_input'
                  value={formData.Profile_age_input}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label className='AddPhotoButton'>
                  Добавить фотографию
                  <input
                    type='file'
                    id='photo'
                    name='photo'
                    accept='image/*' // Позволяет загружать только изображения
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              {formData.photo && (
                <div className='photo-preview'>
                  <img
                    src={URL.createObjectURL(formData.photo)}
                    alt='Превью фотографии'
                    className='photo_preview'
                    
                  />
                </div>
              )}
              <button type='submit' className='SaveButton' onClick={toggleisTestCreate}>Сохранить</button>
              
            </form>
          </div>
        </div>
      )}
        </Layout>
    );
}
export default PhotoUpload;
