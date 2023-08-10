import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../style/lendingPage.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserProfile, fetchCurrentUser } from '../../store/actions';

const UserData = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState([]);

    const getDataApi = () => {
        axios.get('https://panorbit.in/api/users.json').then((data) => {
            setUserData([...data.data.users]);
            dispatch(addUserProfile(data.data.users));
        })
    }

    useEffect(() => {
        getDataApi();
    }, [])

    const viewProfile = (data) => {
        const dataUser = [];
        dataUser.push(data);
        localStorage.setItem('user', dataUser);
        navigate('/profile', {state: data});
        dispatch(fetchCurrentUser(data));
    }


    return (
      <div>
        <div className='floating-card-lending'>Select an account
        {userData.map((data, index) => (
            <div key={index} className='user-data-item' onClick={() => viewProfile(data)}>
                <span className='circular-image'><img src={data.profilepicture} /></span>
                <span className='user-name'>{data.name}</span>
            </div>
        ))}
        </div>
      </div>
    )
}

export default UserData