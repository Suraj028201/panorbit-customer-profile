import React, { useState } from 'react';
import '../../style/header.css';
import LogoutCard from './LogoutCard';
import { useSelector } from 'react-redux';

const Header = ({ name, imgSource }) => {

    const [showCard, setShowCard] = useState(false);
    const headerName = useSelector((state) => state.getName.name);

    const openLogoutCard = () => {
      setShowCard(true);
    }

    return (
      <header className="header">
        <div className="left-section">{headerName}</div>
        <div className="right-section" onClick={openLogoutCard}>
          <span className="circular-image">
            <img src={imgSource} alt="Profile" />
          </span>
          <div>{name}</div>
          {showCard && <LogoutCard setShowCard={setShowCard} />}
        </div>
      </header>
    );
};

export default Header;
