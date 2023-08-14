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
      {/* <div className='header_line'/> */}
      <div className='Profile_center'>
        <div className='Profile_image'>
          <div className='Profile_image_icon'/>
          <a>Сергей</a>
          <a>Миронов</a>
        </div>
        <div className='Profile_info'>

        </div>
    </div>
    </div>
  );
}

export default Profile;
