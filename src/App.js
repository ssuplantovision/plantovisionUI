import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { checkAuth } from './features/user';

import './App.css';
import './index.css';
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SingUp from "./pages/SingUp/SingUp";
import Profile from "./pages/Profile/Profile";

function App() {
  

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
	}, []);

  return (
    // <div className="App">
    
    // {/* <Link to="login">Home</Link> */}
    // <header>
    //   <div className='header_icon'/>
    //   <div className='logIn_block'>
    //   <Link to='/profile' style={{ textDecoration: 'none' }}>
    //     <h1>Личный кабинет</h1>
    //     </Link>
    //   <Link to='/login' style={{ textDecoration: 'none' }}>
    //     <h1>Войти</h1>
    //   </Link>
    //   <Link to='/singup' style={{ textDecoration: 'none' }}>
    //     <h1>Зарегестрироваться</h1>
    //     </Link>
    //   </div>
      
    // </header>
    // <div className='header_line'/>
    
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SingUp />} />
      </Routes>
  </Router>
  );
}

export default App;
