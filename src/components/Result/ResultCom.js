// ResultCom.js
import React from 'react';
import { Outlet} from 'react-router-dom'; // Import Link
import Header from "./Header";

const ResultCom = () => {
  return (
    <div className="app">
      {/* <Header /> */}
     <h1>Student Organiser</h1>
      <Outlet />
    </div>
  );
};

export default ResultCom;
