import React, { useState, useRef,useEffect  } from 'react';
import { useNavigate, Navigate, NavLink  } from "react-router-dom";
import '../Profile/Profile.css';
import yourImage from '../../assets/images/exs1.png';
import yourImage1 from '../../assets/images/exs2.png';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto, getPhoto } from '../../features/user';
import Layout from '../../components/Layout';

import { Link } from "react-router-dom";
// import { channel } from 'diagnostics_channel';
function Profile() {
    
  const dispatch = useDispatch();
   // Вызовы хуков useState перенесены на верхний уровень
   const { isAuthenticated, user, loading,users_photo } = useSelector(state => state.user);

   useEffect(() => {
    dispatch(getPhoto());


	}, []);

  if (!isAuthenticated && !loading && user === null) {
    return <Navigate to="/login" />;
  }
  const onDelete = (pers_ident, per_numb) => {
    dispatch(deletePhoto({ photo_pers_identifier: pers_ident, photo_secure_number: per_numb }));
  }


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
    {users_photo && users_photo.map(photo => (
      <div key={photo.user_photo}>

      
    
    <div className='Profile_info'>
        <img className='Profile_info_image'
          src={`http://localhost:8000${photo.user_photo}`}
    
        />
        <img className='Profile_info_image'
          src={`http://localhost:8000${photo.user_photo}`}

        />
        <div className='Profile_info_text'>
          <div className='Profile_info_text_date'>
          <h1>Дата последнего изучения: </h1>
          {/* <a>02.08.2023</a> */}
          <a>{photo.photo_pers_identifier}</a>
          </div>
          <div className='Profile_info_text_date'>
          <h1>Результат: </h1>
          {/* <a>Отклонение 1 пальца, плоскостопие</a> */}
          <a>{photo.photo_secure_number}</a>
          </div>
        </div>
    </div>
    <button type='delete' className='SaveButton' onClick={() => onDelete(photo.photo_pers_identifier, photo.photo_secure_number)}>Удалить</button>
    </div>
    ))}



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
