import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/user';
import './Navbar.css'
import React, {useState} from 'react';
const Navbar = () => {
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector(state => state.user);
	const [isViewSecretkey, setisViewSecretkey]= useState(false);
	const getSecretKey = () => {
		setisViewSecretkey(!isViewSecretkey)
	  }
	const authLinks = (
		<>
			<li className='nav-item'>
				<NavLink className='nav-link text-white' to='/profile'>
					Личный кабинет
				</NavLink>
			</li>
			<li className='nav-item'>
				<a className='nav-link text-white' href='#!' onClick={() => dispatch(logout())}>
					Выйти
				</a>
			</li>
		</>
	);

	const guestLinks = (
		<>
			<li className='nav-item'>
				<NavLink className='nav-link active text-white' to='/login'>
					Войти
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link active text-white' to='/register'>
					Зарегистрироваться
				</NavLink>
			</li>
		</>
	);

	return (
		<nav className='navbar bg-dark navbar-expand-lg ' >
			<div className='container-fluid'>
				<Link className='navbar-brand text-white' to='/'>
				<div class="img_block d-inline-block align-text-top"/>
      			
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				{user && (
					<div style={{display:'flex', alignItems:'flex-end', justifyContent:'center'}}>
					 <div className='profileIcon'/>
					 <a className='profileName'>{user.first_name}#{user.pers_identifier}</a>
					 {!isViewSecretkey && <button className='ProfileSecretKey' type="take_sec" onClick={getSecretKey}>Секретный ключ</button>} 
					 {isViewSecretkey && (<div className='secret_key'>
					   <a>{user && (user.secure_number)}</a> 
					 </div>)}
					</div>
				)}
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink className='nav-link text-white' to='/'>
								Главная
							</NavLink>
						</li>
			
						{isAuthenticated ? authLinks : guestLinks}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
