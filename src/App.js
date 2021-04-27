import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid.js';
import Modal from './comps/Modal.js';
import Title from './comps/Title.js';
import UploadForm from './comps/UploadForm.js';

function App() {
  const [img, setimg] = useState(null)
  console.log(img);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setimg={setimg}/>
      {img && <Modal img={img} setimg={setimg} />}
      
      
    </div>
  );
}

export default App;