import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Features from './components/Feature/Features';
import Template from './components/Template/Template';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <Fragment>
      <div className='app'>
        <Navbar />
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
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;