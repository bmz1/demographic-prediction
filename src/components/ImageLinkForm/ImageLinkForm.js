import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 tc'>
        {'Add a URL, and see what happens...'}
      </p>
      <div>
        <div className='form pa4 shadow-5 tc'>
          <input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
          <button
            className='btn btn-primary btn-lg'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
