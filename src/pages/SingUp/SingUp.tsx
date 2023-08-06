import React from 'react';
import { useNavigate  } from "react-router-dom";
import '../SingUp/SingUp.css';
import { Link } from "react-router-dom";
function SingUp() {

  let navigate = useNavigate();
  const getBackPage = () =>{
      navigate('/')
    
  }



  return (
    // <div onClick={getBackPage} className="App">
    <div className='LogInPage'>
      <header>
      {/* <Link to='/ ' style={{ textDecoration: 'none' }}> */}
      <div className='header_icon' onClick={getBackPage} style={{cursor:"pointer"}}/>
      {/* </Link> */}
      </header>
      <div className='header_line'/>
      <div className='header_line'/>
      <center>
        <h1>Регистрация</h1>
        <div className='input_block'>
          <div className='logIn_user_name'>
            <a>Имя пользователя</a>
            <div className='logIn_user_name_block'>
              <div className='logIn_user_name_block_icon'/>
              <input placeholder='Введите логин...' className='logIn_user_name_input'></input>
            </div>
          </div>
          
          <div className='logIn_user_password'>
            <a>Пароль</a>
            <div className='logIn_user_password_block'>
              <div className='logIn_user_password_block_icon'/>
              <input type='password' placeholder='Введите пароль...'></input>
            </div>
          </div>
          <div className='logIn_enter'>
            <h1>Создать аккаунт</h1>
          </div>
        </div>
        <div className='singUp_block'>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <a>
            Войти в аккаунт
          </a>
          </Link> 
        </div>
      </center>
    </div>
  );
}

export default SingUp;
