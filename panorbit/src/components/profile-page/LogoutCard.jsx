import React from 'react';
import '../../style/logout-card.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../../store/actions';

const LogoutCard = ({ setShowCard }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.getCurrentUser.userProfile)
  const allUsers = useSelector((state) => state.users.userProfiles);

  const onClose = () => {
    setShowCard(false);
    navigate('/');
  }

  const changeUser = (user) => {
    const dataUser = [];
    dataUser.push(user);
    localStorage.setItem('user', dataUser);
    setShowCard(false);
    dispatch(fetchCurrentUser(user));
  }

  return (
    <div className="floating-card">
      <div className="card-content">
        <div className="profile-section">
          <div className="bigger-circular-image">
            <img src={userProfile[0].profilepicture} alt="Profile" />
          </div>
          <div className='user-data'>{userProfile[0].name}</div>
          <div className='user-data'>{userProfile[0].email}</div>
        </div>
        <div className="logout-user-list">
        {allUsers[0].slice(0,3).map((user, index) => (
          <div className='logout-user' key={index} onClick={() => changeUser(user)}>
            <span className='small-circular-img'><img src={user.profilepicture} alt="" /></span>
            <span>{user.name}</span>
          </div>
        ))}
        </div>
        <button className="logout-button" onClick={onClose}>Logout</button>
      </div>
    </div>
  )
}

export default LogoutCard;