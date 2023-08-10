import React, {useState} from 'react';
import '../../style/navigation-card.css';
import { useDispatch } from 'react-redux';
import { changeProfileContent } from '../../store/actions';

const NavigationCard = () => {

  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState('Profile');

  const navigationClicked = (data) => {
    dispatch(changeProfileContent(data));
    setActiveButton(data);
  }
  
  return (
    <div className='navigation-card'>
      <div className={`navigate-button ${activeButton === 'Profile' ? 'active' : ''}`} onClick={() => navigationClicked('Profile')}>Profile</div>
      <div className={`navigate-button ${activeButton === 'Posts' ? 'active' : ''}`} onClick={() => navigationClicked('Posts')}>Posts</div>
      <div className={`navigate-button ${activeButton === 'Gallery' ? 'active' : ''}`} onClick={() => navigationClicked('Gallery')}>Gallery</div>
      <div className={`navigate-button ${activeButton === 'ToDo' ? 'active' : ''}`} onClick={() => navigationClicked('ToDo')}>ToDo</div>
    </div>
  )
}

export default NavigationCard