import {useState, useEffect} from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import '../Login/Login.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { resetRegistered, login } from '../../features/user';
import Layout from '../../components/Layout';
function Login() {

  const dispatch = useDispatch();
	const { loading, isAuthenticated, user, registered } = useSelector(
		state => state.user
	);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		if (registered) dispatch(resetRegistered());
	}, [registered]);

	const { email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
    console.log(email, password)
		dispatch(login({ email, password }));
    
		console.log(isAuthenticated)
	};

	if (isAuthenticated) return <Navigate to='/profile' />;
  return (

    <Layout title='Вход' content='Login page'>
    <div className='LogInPage'>

      <form className='centerLogin' onSubmit={onSubmit}>
        <h1>Авторизация</h1>
        <div className='input_block'>
          <div className='logIn_user_name'>
            <a>Имя пользователя</a>
            <div className='logIn_user_name_block'>
              <div className='logIn_user_name_block_icon'/>
              <input placeholder='Введите почту...' 
              className='logIn_user_name_input'
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
              <input 
                
                placeholder='Введите пароль...' 
                type='password'
                name='password'
                onChange={onChange}
                value={password}
                required
              ></input>
            </div>
          </div>
          <a className='forgoten_passowrd'>Забыли пароль?</a>
          {/* <div className='logIn_enter'> */}
            <button className='logIn_enter'>Войти</button>
          {/* </div> */}
          {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
        </div>
       
        <div className='singUp_block'>
        {/* <Link to='/singup' style={{ textDecoration: 'none' }}>
          <a>
            Создать аккаунт
          </a>
          </Link> */}
        </div>
      </form>
    </div>
    </Layout>
  );
}

export default Login;
