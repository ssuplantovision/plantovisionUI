import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
        <h1>PlantoVision</h1>
        <div>
          <h1>Icons</h1>
        </div>
      </header>
      <center>
        <div>
          <h1>Добро пожаловать!</h1>
          <div className='singIn'>Войти</div>
          <div className='singUp'>Зарегестрироваться</div>
        </div>
      </center>
    </div>
  );
}

export default App;
