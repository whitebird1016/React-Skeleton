import React, { useState } from 'react';
import './App.scss';
import Skeleton from './components/Skeleton';

function App() {

  const [isLoaded, setLoaded] = useState(false)
  const [isLoadedDemo, setLoadedDemo] = useState(false)

  return (
    <div className="container">
      <div className="sep-components">
        <h3>Separated Components</h3>
        <Skeleton width="200px" height="30px" loaded={false}>
          <a>tests</a>
        </Skeleton>

        <Skeleton width="60px" height="60px" loaded={false} shape="circle">
          <img src="https://picsum.photos/60/60" />
        </Skeleton>

        <Skeleton width="200px" height="30px" loaded={isLoaded}>
          <a style={{ color: "white", fontSize: "14pt" }}>tests</a>
        </Skeleton>

        <Skeleton width="60px" height="60px" loaded={false} shape="circle" duration={8000}>
          <img
            src="https://picsum.photos/id/231/60/60"
            style={{ borderRadius: "50%" }}
          />
        </Skeleton>
        <Skeleton width="60px" height="60px" loaded={isLoaded} shape="circle">
          <img
            src="https://picsum.photos/id/231/60/60"
            style={{ borderRadius: "50%" }}
          />
        </Skeleton>


        <div style={{ display: "inherit", marginTop: "50px" }}>
          <button onClick={() => setLoaded(!isLoaded)}>Push data</button>
        </div>
      </div>

      <div className="linkedin-card">
        <Skeleton width="90px" height="90px" loaded={isLoadedDemo} shape="circle" style={{ top: "150px", left: "85px", zIndex: "2" }} backgroundColor="#e1e9ee">
          <img src="https://picsum.photos/id/231/90/90"
            style={{ borderRadius: "50%", top: "150px", left: "85px", zIndex: "2", display: "inline-block", position: "relative" }}
          />
        </Skeleton>

        <Skeleton width="260px" height="100px" loaded={isLoadedDemo} style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px", display: "flex" }} backgroundColor="#D3DCE2">
          <div style={{ width: "260px", height: "100px", backgroundColor: "white" }}>
            <img src="https://picsum.photos/260/100" />
          </div>
        </Skeleton>

        <div style={{ width: "260px", height: "290px", backgroundColor: "white", textAlign: "center", display: "inline-block" }}>
          <Skeleton width="200px" height="20px" loaded={isLoadedDemo} backgroundColor="#E7EDF1" style={{ marginTop: "60px" }}>
            <a style={{ marginTop: "60px", display: "block", fontWeight: "bold" }}>Anıl Şenay</a>
          </Skeleton>
          <Skeleton width="150px" height="20px" loaded={isLoadedDemo} backgroundColor="#E7EDF1" style={{ marginTop: "10px" }}>
            <a style={{ marginTop: "10px", display: "block" }}>Marmara University</a>
          </Skeleton>
        </div>

        <div style={{ display: "inherit", marginTop: "50px" }}>
          <button onClick={() => setLoadedDemo(!isLoadedDemo)}>Push data</button>
        </div>
      </div>

    </div>
  );
}

export default App;
