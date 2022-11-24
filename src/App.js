import './App.css';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Features from './components/Feature/Features';
import Template from './components/Template/Template';

function App() {
  return (
    <Fragment>
      <div className='app'>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <SignUp />
        </Route>
        <Route path='/features'>
          <Features />
        </Route>
        <Route path='/templates' >
          <Template />
        </Route>
        <Route></Route>
      </div>
    </Fragment>
  );
}

export default App;