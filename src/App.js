
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Table from './components/Table';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <div className="app">
      {isLoggedIn && <Header />}
      {isLoggedIn ? <Table /> : <LoginForm onLogin={handleLogin} />}
      {isLoggedIn && <Footer />}
    </div>
  );

}

export default App;
