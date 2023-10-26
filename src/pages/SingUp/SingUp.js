import {useState} from 'react';
import { useNavigate  } from "react-router-dom";
import '../SingUp/SingUp.css';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../features/user';
function SingUp() {

  // let navigate = useNavigate();
  // const getBackPage = () =>{
  //     navigate('/')
    
  // }
  // const [password, setPassword] = useState('');
  // const [login, setLogin] = useState('');
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState('');
  // const handleLogin = () => {
  //   if (password === '') {
  //     setError('Пожалуйста, введите пароль.');
  //   } else if (login === ''){
  //     setError('Пожалуйста, введите логин.');
      
  //   }else if (email === ''){
  //     setError('Пожалуйста, введите почту.');
      
  //   }else{
  //     setError('');
  //   }
  // };

  const dispatch = useDispatch();
	const { registered, loading } = useSelector(state => state.user);

	const [formData, setFormData] = useState({
		first_name: '',
		email: '',
		password: '',
	});

	const { first_name, email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
    console.log("dsadas")
		e.preventDefault();

		dispatch(register({ first_name, email, password }));
	};

	if (registered) return <Navigate to='/login' />;

  return (
    // <div onClick={getBackPage} className="App">
    <Layout title='Регистрация' content='Register page'>
    <div className='LogInPage'  >
      {/* <header>
   
      <div className='header_icon' onClick={getBackPage} style={{cursor:"pointer"}}/>
     
      </header> */}
      {/* <div className='header_line'/> */}
      {/* <div className='header_line'/> */}
      <form onSubmit={onSubmit}>
        <h1>Регистрация</h1>
        <div className='input_block'>
          <div className='logIn_user_name'>
            <a>Имя пользователя</a>
            <div className='logIn_user_name_block'>
              <div className='logIn_user_name_block_icon'/>
              <input placeholder='Введите логин...' 
              className='logIn_user_name_input'
              type='text'
              name='first_name'
              onChange={onChange}
              value={first_name}
              required></input>
            </div>
          </div>
          <div className='logIn_user_password'>
            <a>Почта</a>
            <div className='logIn_user_password_block'>
              <div className='logIn_user_password_block_icon' id='logIn_user_email_block_icon'/>
              <input
              placeholder='Введите почту...' 
              type='email'
						  name='email'
						  onChange={onChange}
						  value={email}
						  required></input>
            </div>
          </div>
          <div className='logIn_user_password'>
            <a>Пароль</a>
            <div className='logIn_user_password_block'>
              <div className='logIn_user_password_block_icon'/>
              <input placeholder='Введите пароль...' 
              type='password'
						name='password'
						onChange={onChange}
						value={password}
						required></input>
            </div>
          </div>
          
          <div >
          <button className='logIn_enter'>Зарегестрироваться</button>
          </div>
          {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
        </div>
        <div className='singUp_block'>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <a>
            Войти в аккаунт
          </a>
          </Link> 
        </div>
      </form>
    </div>
    </Layout>
  );
}

export default SingUp;
