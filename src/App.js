import './App.css';
import { Fragment, useState } from 'react';
import Home from './components/Home'
import Login from './components/Login';

function App() {
  const [homePage, setHomePage] = useState(true);
  const [loginPage, setLoginPage] = useState(false);

  const LoginClickHandler = () => {
    setLoginPage(true);
    setHomePage(false);
  };

  return (
    <Fragment>
      <div className='app'>
        {homePage && <Home onLoginClick={LoginClickHandler} />}
        {loginPage && <Login />}
      </div>
    </Fragment>
  );
}

export default App;