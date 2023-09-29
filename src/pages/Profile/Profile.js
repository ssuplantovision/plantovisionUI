import React, { useState, useRef  } from 'react';
import { useNavigate, Navigate, NavLink  } from "react-router-dom";
import '../Profile/Profile.css';
import yourImage from '../../assets/images/exs1.png';
import yourImage1 from '../../assets/images/exs2.png';
import { useSelector, useDispatch } from 'react-redux';
import { resetRegistered, login } from '../../features/user';
import Layout from '../../components/Layout';

import { Link } from "react-router-dom";
// import { channel } from 'diagnostics_channel';
function Profile() {
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

  const getBackPage = () => {
    // navigate('/')
  };
  // const handleEditClick = () => {
  //   setIsEditing(true);
  // };

  // const handleSaveClick = () => {
  //   setIsEditing(false);
  //   // Дополнительный код для сохранения данных, например, отправка на сервер
  // };


 




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

  return (
    // <div onClick={getBackPage} className="App">
    <Layout title='Профиль' content='Login page'>
    <div className='ProfilePage'>
  
      {/* <div className='header_line'/> */}
      <div className='Profile_center'>
      <div className='Profile_image_flex'>
      <div className='Profile_image'>    
      <div className='Profile_image_name'>
        {user && (<a>{user.first_name}#{user.pers_identifier}</a>)}
        <div class="btn-group secretkey mt-2">
          <button type="button" class="btn secretkey" data-bs-toggle="dropdown" >
            Секретный ключ
          </button>
          <ul class="dropdown-menu secretkey_toggle">
            <li><a>{user && (user.secure_number)}</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className='Profile_setting_bt'> Настройки</div>
    </div>


    <div className='Profile_info_div'>
      
    

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
    <div className={`Profile_info ${isTestCreate ? '' : 'testCreate'}`}>
        <div
          className={`Profile_info_image ${isImageEnlarged ? 'enlarged' : ''}`}
          id='res'
          onClick={() => toggleImageEnlargement('res')}
        >
        </div>
        <div className={`Profile_info_image ${isImageEnlarged ? 'enlarged' : ''}`} 
        id='res1' 
        onClick={() => toggleImageEnlargement('res1')}>
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
          <div className='EnlargedImageContainer' >
            <img
           
              src = {process.env.PUBLIC_URL + imageChange}
              className='EnlargedImage'
            />
          </div>
        </div>
      )}
    <div className='Profile_info_add'>
        <div className='Profile_info_hover' >
          <NavLink className='nav-link active uploadlink' to='/photoupload'>Добавить новое исследование</NavLink>
        </div>
      </div>

      
    </div>
    </div>
    </div>
    </Layout>
  );
}

export default Profile;
