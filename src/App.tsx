import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { Link } from "react-router-dom";


function App() {
  

  const handleClick = () => {
    
  };

  return (
    <div className="App">
    
    {/* <Link to="login">Home</Link> */}
    <header>
      <div className='header_icon'/>
      <div className='logIn_block'>
      <Link to='/profile' style={{ textDecoration: 'none' }}>
        <h1>Личный кабинет</h1>
        </Link>
      <Link to='/login' style={{ textDecoration: 'none' }}>
        <h1>Войти</h1>
      </Link>
      <Link to='/singup' style={{ textDecoration: 'none' }}>
        <h1>Зарегестрироваться</h1>
        </Link>
      </div>
      
    </header>
    <div className='header_line'/>
    
    </div>
  );
}

export default App;
