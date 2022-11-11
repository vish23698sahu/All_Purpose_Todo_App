import './App.css';
import { Fragment, useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  const [homePage, setHomePage] = useState(true);
  const [loginPage, setLoginPage] = useState(false);

  const LoginClickHandler = () => {
    setLoginPage(true);
    setHomePage(false);
  };

  const onHomeClickHandler = () => {
    setHomePage(true);
    setLoginPage(false);
  }

  return (
    <Fragment>
      <div className='app'>
        {homePage && <Home onLoginClick={LoginClickHandler} />}
        {loginPage && <Login onHomeClick={onHomeClickHandler} />}
      </div>
    </Fragment>
  );
}

export default App;