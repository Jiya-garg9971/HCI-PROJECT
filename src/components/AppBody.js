import React from 'react';
import { Link } from 'react-router-dom';
import { STUDENTPIC_URL } from '../utils/constants';
const AppBody = () => {
  return (
    <div className="button-container">
      <div className='flex justify-center'> 
        <img className='p-3 image-center' src={STUDENTPIC_URL} alt="Girl Pic"/>
      </div>
      <div className="button-row">
        <Link to="/result"><button style={buttonStyle}>RESULT TRACKER</button></Link> 
        <Link to="/attendence"><button style={buttonStyle}>ATTENDENCE TRACKER</button></Link>
      </div>
      <div className="button-row">
        <Link to="/expense"><button style={buttonStyle}>EXPENSE TRACKER</button></Link> 
        <Link to="/todo"><button style={buttonStyle}>TASK SCHEDULE</button></Link>
      </div>
    </div>
  );
}


const buttonStyle = {
    backgroundColor: '#FFCBA4',
    color: 'black',
    padding: '15px 30px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    width: '200px', // Set a fixed width for the buttons
    height: '100px', // Set a fixed height for the buttons
  };
  
export default AppBody;
