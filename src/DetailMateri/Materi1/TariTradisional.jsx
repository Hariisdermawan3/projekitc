// import React from 'react';


const TariTradisional = () => {
    return (
      <div className="center-container"  style={{ background: '#F0ECCF' }}>
        <h1>Tari Tradisional</h1>
        <h6>Materi1</h6>
        <div className="video-container">
          <video width="640" height="360" controls>
            <source src="src/assets/video/kelas1-2.mp4" type="video/mp4" />
          </video>
        </div>
        <p style={{padding: '10px'}}>Dengan video ini, kita bisa belajar sambil bersenang-senang. Yuk kita tonton bersama!</p>
      </div>
    );
  };
  
  export default TariTradisional;
  
  