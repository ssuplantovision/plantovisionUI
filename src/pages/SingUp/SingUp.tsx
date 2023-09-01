import {useState} from 'react';
import { useNavigate  } from "react-router-dom";
import '../SingUp/SingUp.css';
import { Link } from "react-router-dom";
function SingUp() {

  let navigate = useNavigate();
  const getBackPage = () =>{
      navigate('/')
    
  }
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    if (password === '') {
      setError('Пожалуйста, введите пароль.');
    } else if (login === ''){
      setError('Пожалуйста, введите логин.');
      
    }else if (email === ''){
      setError('Пожалуйста, введите почту.');
      
    }else{
      setError('');
    }
  };


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
              <input placeholder='Введите логин...' className='logIn_user_name_input'
               value={login}
               onChange={(e) => setLogin(e.target.value)}></input>
            </div>
          </div>
          <div className='logIn_user_password'>
            <a>Почта</a>
            <div className='logIn_user_password_block'>
              <div className='logIn_user_password_block_icon' id='logIn_user_email_block_icon'/>
              <input type='password' placeholder='Введите почту...' value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
          </div>
          <div className='logIn_user_password'>
            <a>Пароль</a>
            <div className='logIn_user_password_block'>
              <div className='logIn_user_password_block_icon'/>
              <input type='password' placeholder='Введите пароль...' value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            </div>
          </div>
          
          <div className='logIn_enter'>
            <h1 onClick={handleLogin}>Создать аккаунт</h1>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
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