import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import NavigationCard from './NavigationCard';
import '../../style/profile-page.css';
import ProfileDetails from './ProfileDetails';
import AddressCard from './AddressCard';
import CommingSoon from './CommingSoon';

const ProfilePage = () => {

  const userProfile = useSelector(state => state.getCurrentUser.userProfile);
  const headerName = useSelector((state) => state.getName.name);
  
  const [showProfile, setShowProfile] = useState(true);

  useEffect(() => {
    if(headerName === 'Profile'){
      setShowProfile(true);
    } else{
      setShowProfile(false);
    }
  },[headerName])

  return (
    <>
    <div className='profile-page'>
      <NavigationCard />  
      <Header name={userProfile[0].name} imgSource={userProfile[0].profilepicture} />
      {showProfile ? <>
      <ProfileDetails />
      <AddressCard />
      </> : <CommingSoon/> }
    </div>
    </>
  )
}

export default ProfilePage;