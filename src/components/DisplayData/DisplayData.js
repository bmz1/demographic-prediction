import React from 'react';
import './DisplayData.css'


const DisplayData = ({ data }) => {
  

  return (
    <div className="row">

      <div className="col">
        <div className="card text-white bg-primary mb-3 h-100">
          <div className="card-header">AGE</div>
          <div className="card-body">
            <h5 className="card-title">{data.age}</h5>
            <p className="card-text">Valószínűség: {data.ageProbability}%</p>
          </div>
          </div>
          </div>


          <div className="col">
          <div className="card text-white bg-secondary mb-3 h-100">
            <div className="card-header">Gender</div>
            <div className="card-body">
              <h5 className="card-title">{data.gender}</h5>
              <p className="card-text">Valószínűség: {data.genderProbability}%</p>
            </div>
            </div>
            </div>


            <div className="col">
            <div className="card text-white bg-success mb-3 h-100">
              <div className="card-header">Race</div>
              <div className="card-body">
                <h5 className="card-title">{data.race}</h5>
                <p className="card-text">Valószínűség: {data.raceProbability}%</p>
              </div>
              </div>
              </div>




    </div>

  );
}

export default DisplayData;
