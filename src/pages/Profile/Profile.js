import React, { useState, useRef,useEffect  } from 'react';
import { useNavigate, Navigate, NavLink  } from "react-router-dom";
import '../Profile/Profile.css';

import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto, getPhoto, setsecpassword } from '../../features/user';
import Layout from '../../components/Layout';

function Profile() {
    
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading,users_photo } = useSelector(state => state.user);
  
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

  const onShow = (pers_ident, per_numb) => {
    dispatch(setsecpassword({ sec_ident: pers_ident, sec_passwof: per_numb }));
    // dispatch(getResultPhoto({ photo_pers_identifier: pers_ident, photo_secure_number: per_numb }));
    console.log("OnShow")
    // return <Navigate to="/resultphoto" />
  
  }

  return (
    <Layout title='Профиль' content='Login page'>
    <div className='ProfilePage'>
        <div className='Profile_center' >
          <div className='gridProfile'>
        <h1 className='titleProfile'>Исследования пациента</h1>
            <NavLink className='nav-link active uploadlink add_new_reviews' to='/photoupload'>
              <h1>+ Добавить</h1>
            </NavLink>
            </div>
        <div className='tableNewDezign'> 
        <table class="table Profile_reviews">
        <thead className='Profile_review_header'>
          <tr>
            <th scope="col">Номер</th>
            <th scope="col">Фото</th>
            <th scope="col">Дата исследования</th>
            <th colspan="2">Управление</th> 
          
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
            <td style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle" ,
              fontSize: "2vh" 
              }}>
              <NavLink type='show' 
              className='ShowButton nav-link ' 

              onClick={() => onShow(photo.photo_pers_identifier, photo.photo_secure_number)}
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
    </div>
    </Layout>
  );
}

export default Profile;
