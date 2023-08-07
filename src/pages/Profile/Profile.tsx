import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import '../Profile/Profile.css';
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


  return (
    // <div onClick={getBackPage} className="App">
    <div className='ProfilePage'>
      <header>
      <div className='header_icon' onClick={getBackPage} style={{cursor:"pointer"}}/>
      </header>
      <div className='header_line'/>
      <div className='Profile_center'>
      <div className='profile_center_left'>
        <div className='profile_center_left_image_block'>
          <div className='profile_center_left_image_block_icon' />
          <div className='profile_center_left_image_block_redact'>
            {isEditing ? (
              <h1 onClick={handleSaveClick}>Сохранить</h1>
            ) : (
              <h1 onClick={handleEditClick}>Редактировать</h1>
            )}
          </div>
        </div>
      </div>
      <div className='profile_center_right'>
        <div className='profile_center_right_name'>
          {isEditing ? (
            <>
              <input
              className='profile_center_right_input'
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className='profile_center_right_input'
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          ) : (
            <>
              <a>{firstName} </a>
              <a>{lastName} </a>
            </>
          )}
        </div>
        <div className='profile_center_right_old'>
          {isEditing ? (
            <>
              <input
                className='profile_center_right_input'
                type='text'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </>
          ) : (
            <>
              <a id='profile_center_right_old_old'>Возраст: </a>
              <a>{age} </a>
            </>
          )}
        </div>
        <div className='profile_center_right_old'>
          {isEditing ? (
            <>
              <input
              className='profile_center_right_input'
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </>
          ) : (
            <>
              <a id='profile_center_right_old_old'>Адрес: </a>
              <a>{address} </a>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
