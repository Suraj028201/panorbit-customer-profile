import React, { useEffect, useState } from 'react';
import UserData from './UserData';
import '../../style/lendingPage.css';

const LendingPage = () => {



    return (
      // <div className='container'>
      //   <div className="inner-container">
      //       <UserData />
      //   </div>
      // </div>
      <div className="lending-page">
        <div className="upper-section"></div>
        <div className="lower-section">
          <UserData />
        </div>
      </div>
    )
}

export default LendingPage;