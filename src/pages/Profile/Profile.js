import React, { useState, useRef,useEffect  } from 'react';
import { useNavigate, Navigate, NavLink  } from "react-router-dom";
import '../Profile/Profile.css';

import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto, getPhoto, setsecpassword } from '../../features/user';
import Layout from '../../components/Layout';

function Profile() {
    
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading,users_photo } = useSelector(state => state.user);
  const [isViewSecretkey, setisViewSecretkey]= useState(false);
   useEffect(() => {
    dispatch(getPhoto());
	}, []);

  if (!isAuthenticated && !loading && user === null) {
    return <Navigate to="/login" />;
  }
  const onDelete = (pers_ident, per_numb) => {
    
    dispatch(deletePhoto({ photo_pers_identifier: pers_ident, photo_secure_number: per_numb }));
    window.location.reload();
  }
  const getSecretKey = () => {
    setisViewSecretkey(!isViewSecretkey)
  }
  const onShow = (pers_ident, per_numb) => {
    dispatch(setsecpassword({ sec_ident: pers_ident, sec_passwof: per_numb }));
    // dispatch(getResultPhoto({ photo_pers_identifier: pers_ident, photo_secure_number: per_numb }));
    console.log("OnShow")
    // return <Navigate to="/resultphoto" />
  }

  return (
    <Layout title='Профиль' content='Login page'>
    <div className='ProfilePage'>
      <div className='Profile_left '>
        <div className='h3 d-flex flex-column profile_let_number'>
          <a>Логин и номер пациента</a>
         {user && (<a className='profile_let_number_a'>{user.first_name}#{user.pers_identifier}</a>)}
        </div>
        <div className='Profile_user_seceretkey'>
          {!isViewSecretkey && <button type="take_sec" className="profile_user_secret_key" onClick={getSecretKey}>Секретный ключ</button>} 
          {isViewSecretkey && (<div className='h3 secret_key_block'>
            <a>{user && (user.secure_number)}</a> 
          </div>)}
        </div>
      </div>
      <div className='Profile_center'>
        <div className='Profile_center_header'>
          <a >Исследования</a>
          <NavLink className='nav-link active uploadlink add_new_reviews' to='/photoupload'>
            <h1>Добавить новое</h1>
          </NavLink>
        </div>
        <table class="table Profile_reviews table-bordered">
        <thead className='Profile_review_header'>
          <tr>
            <th scope="col">Номер</th>
            <th scope="col">Фото</th>
            <th scope="col">Дата исследование</th>
            {/* <th scope="col">Результат</th> */}
            <th scope="col">Посмотреть</th> 
            <th scope="col">Удалить</th> 
          </tr>
        </thead>
        <tbody>
        {users_photo && users_photo.map((photo, index) => (
          <tr key={photo.user_photo}>
            <th style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle",
              fontSize: "2vh" 
              }}scope="row">{index + 1}</th>
            <td><img className='Profile_info_image'
              src={`http://localhost:8000${photo.user_photo}`}
            /></td>
            <td style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle" ,
              fontSize: "2vh" 
              }}>{photo.date_upload}</td>
            {/* <td style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle" ,
              fontSize: "2vh" 
              }}>Плоскостопие</td> */}
            <td style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle" ,
              fontSize: "2vh" 
              }}>
                {/* <button type='show' 
              className='ShowButton' 
              onClick={() => onShow(photo.photo_pers_identifier, photo.photo_secure_number)}
              // onClick={() => onTest()}
              >Посмотреть</button> */}
              <NavLink type='show' 
              className='ShowButton nav-link ' 

              onClick={() => onShow(photo.photo_pers_identifier, photo.photo_secure_number)}
              // onClick={() => onShow(photo.photo_pers_identifier, photo.photo_secure_number)}
              to={{
                pathname: '/resultphoto',
              }}
              >Посмотреть</NavLink>
              </td>
              <td style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle" ,
              fontSize: "2vh" 
              }}> 
              <button type='delete' 
              className='DeleteButton' 
              onClick={() => onDelete(photo.photo_pers_identifier, photo.photo_secure_number)}>Удалить</button>
              </td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
    </Layout>
  );
}

export default Profile;
