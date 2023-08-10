import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/profile-details.css';

const ProfileDetails = () => {

  let userProfile = useSelector(state => state.getCurrentUser.userProfile); 


  return (
    <div className='profile-details'>
      <div className="circular-img">
        <img src={userProfile[0].profilepicture} alt="" />
      </div>
      <div className="name">{userProfile[0].name}</div>
      <div className="details">Username: {userProfile[0].username}</div>
      <div className="details">e-mail: {userProfile[0].email}</div>
      <div className="details">Phone: {userProfile[0].phone}</div>
      <div className="details bottom-line">Website: {userProfile[0].website}</div>
      <div className="company">Company</div>
      <div className="details">Name: {userProfile[0].company.name}</div>
      <div className="details">catchPhrase: {userProfile[0].company.catchPhrase}</div>
      <div className="details">bs: {userProfile[0].company.bs}</div>
    </div>
  )
}

export default ProfileDetails;