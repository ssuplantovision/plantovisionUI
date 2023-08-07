import {useState} from 'react';
import { useNavigate  } from "react-router-dom";
import '../Login/Login.css';
import { Link } from "react-router-dom";
function Login() {

  let navigate = useNavigate();
  const getBackPage = () =>{
      navigate('/')
    
  }
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    if (password === '') {
      setError('Пожалуйста, введите пароль.');
    } else if (login === ''){
      setError('Пожалуйста, введите логин.');
      
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
      <center>
        <h1>Авторизация</h1>
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
            <a>Пароль</a>
            <div className='logIn_user_password_block'>
              <div className='logIn_user_password_block_icon'/>
              <input 
                type='password' 
                placeholder='Введите пароль...' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <a className='forgoten_passowrd'>Забыли пароль?</a>
          <div className='logIn_enter'>
            <h1 onClick={handleLogin}>Войти</h1>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
       
        <div className='singUp_block'>
        <Link to='/singup' style={{ textDecoration: 'none' }}>
          <a>
            Создать аккаунт
          </a>
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Login;
