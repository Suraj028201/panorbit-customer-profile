// userReducer.js
import { combineReducers } from 'redux';

const initialState = {
    userProfiles: [],
};
  
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER_PROFILE':
      return {
        ...state,
        userProfiles: [...state.userProfiles, action.payload],
      };
    
    default:
      return state;
  }
};

const getCurrentUser = (state = [], action) => {
  switch(action.type){
    case 'GET_CURRENT_USER':
      return {
        userProfile: [action.payload]
      }

    default:
      return state;
  }
}

const changeName = (state ='Profile', action) => {
  switch(action.type){
    case 'CHANGE_PROFILE_PAGE':
      return {
        name: action.payload
      }
    
    default:
      return {
        name: 'Profile'
      };
  }
}

const rootReducer = combineReducers({
  users: userReducer,
  getCurrentUser: getCurrentUser,
  getName: changeName,
});

export default rootReducer;
  