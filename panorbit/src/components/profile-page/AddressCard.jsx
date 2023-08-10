import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/profile-details.css';

const AddressCard = () => {

  let userProfile = useSelector(state => state.getCurrentUser.userProfile); 

  return (
    <div className='adress-card'>
      <div className="address">Address:</div>
      <div className="address-details">Street: {userProfile[0].address.street}</div>
      <div className="address-details">Suite: {userProfile[0].address.suite}</div>
      <div className="address-details">City: {userProfile[0].address.city}</div>
      <div className="address-details">Zipcode: {userProfile[0].address.zipcode}</div>
      <div className="address-details-map"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMi_AoqeQiURPTN2xjjUPJpIMcjQdSqa6slyYEiZqZ&s" alt="" /></div>
    </div>
  )
}

export default AddressCard;