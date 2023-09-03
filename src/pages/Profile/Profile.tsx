import React, { useState, useRef  } from 'react';
import { useNavigate  } from "react-router-dom";
import '../Profile/Profile.css';
import yourImage from '../../assets/images/res.png';

import { Link } from "react-router-dom";
function Profile() {

  let navigate = useNavigate();
  const getBackPage = () =>{
      navigate('/')
    
  }
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Имя');
  const [lastName, setLastName] = useState('Фамилия');
  const [age, setAge] = useState('100 лет');
  const [address, setAddress] = useState('Россия, г. Саратов, ул. Пушкина');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Дополнительный код для сохранения данных, например, отправка на сервер
  };

  const [image, setImage] = useState(`url('../../assets/images/mir.jpg'`); // Путь к изображению по умолчанию

  const handleImageChange = (event:any) => {
    const newImage = URL.createObjectURL(event.target.files[0]);
    setImage(newImage);
  };


  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    Profile_name_input: '',
    Profile_age_input: '',
    photo: null,
  });

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (e:any) => {
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

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    // Добавьте здесь логику для сохранения данных формы, включая фотографию
    console.log('Данные формы:', formData);
    toggleForm();
  };


  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImageEnlargement = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  return (
    // <div onClick={getBackPage} className="App">
    <div className='ProfilePage'>
      <header>
      <div className='header_icon' onClick={getBackPage} style={{cursor:"pointer"}}/>
      </header>
      {/* <div className='header_line'/> */}
      <div className='Profile_center'>
      <div className='Profile_image'>
      <div className='Profile_image_icon' style={{ backgroundImage: `url(${image})` }}>
        <div className='ChangeImageOverlay'>
        
          <input
            type='file'
            onChange={handleImageChange}
            accept='image/*'
            style={{ display: 'none' }}
            id='fileInput'
          />
          <label htmlFor='fileInput'>Изменить</label>
        </div>
      </div>
      <div className='Profile_image_name'>
        <a>Сергей</a>
        <a>Миронов</a>
      </div>
      
    </div>
    <div className='Profile_info_div'>
      
    <div className='Profile_info'>
        <div
          className={`Profile_info_image ${isImageEnlarged ? 'enlarged' : ''}`}
          id='res'
          onClick={toggleImageEnlargement}
        >
        </div>
        <div className='Profile_info_image' id='res1'>
        </div>
        <div className='Profile_info_text'>
          <div className='Profile_info_text_date'>
            <h1>Дата последнего изучения: </h1>
            <a>02.08.2023</a>
          </div>
          <div className='Profile_info_text_date'>
            <h1>Результат: </h1>
            <a>Отклонение 1 пальца, плоскостопие</a>
          </div>
        </div>
      </div>

      {isImageEnlarged && (
        <div className='ImageOverlay' onClick={toggleImageEnlargement}>
          <div className='EnlargedImageContainer'>
            <img
              src={yourImage}
              className='EnlargedImage'
            />
          </div>
        </div>
      )}

    <div className='Profile_info'>
        <div className='Profile_info_image'/>
        <div className='Profile_info_image'/>
        <div className='Profile_info_text'>
          <div className='Profile_info_text_date'>
          <h1>Дата последнего изучения: </h1>
          <a>02.08.2023</a>
          </div>
          <div className='Profile_info_text_date'>
          <h1>Результат: </h1>
          <a>Отклонение 1 пальца, плоскостопие</a>
          </div>
        </div>
    </div>

    <div className='Profile_info_add'>
        <div className='Profile_info_hover' onClick={toggleForm}>
          <h1>Добавить новое исследование</h1>
        </div>
      </div>

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
              <button type='submit' className='SaveButton'>Сохранить</button>
              
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

export default Profile;
