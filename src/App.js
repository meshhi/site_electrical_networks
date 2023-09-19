import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Carousel from './components/Carousel';
import StartWindow from './components/StartWindow';

function App() {
  const [offset, setOffset] = useState(0);

  const changeOffset = (offsetNew) => {
    setOffset(offsetNew);
  }
  return (
    <div className="app_container">
      <div className='app_container_inner' style={{"top": offset}}>
        <StartWindow changeOffset={changeOffset}></StartWindow>
        <Carousel changeOffset={changeOffset}></Carousel>
      </div>
    </div>
  )
};

export default App;
