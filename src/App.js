import React, { useState } from 'react';
import './App.scss';
import Skeleton from './components/Skeleton';

function App() {

  const [isLoaded, setLoaded] = useState(false)

  return (
    <div className="container">
      <Skeleton
        width = "200px"
        height = "40px"
        loaded = {isLoaded}
      >
        <a>tests</a>
      </Skeleton>


      <div style={{display: "inherit", marginTop: "50px"}}>
        <button onClick = {() => setLoaded(!isLoaded)}>Push data</button>
      </div>

    </div>
  );
}

export default App;
