import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'

function App() {
  return (
    <Fragment>
      <div className='app'>
        <Navbar />
        <Home />
      </div>
    </Fragment>
  );
}

export default App;