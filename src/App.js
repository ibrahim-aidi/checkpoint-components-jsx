import React from 'react';
import './App.css';
import Adress from './Components/Profile/Adress';
import Fullname from './Components/Profile/Fullname';
import Photo from './Components/Profile/Photo';

function App() {
  return (
    <div >
      <div className="App" >
      <Photo/>
      <Fullname/>
      </div>
      <Adress/>
    </div>
  );
}

export default App;
