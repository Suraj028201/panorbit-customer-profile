
export const addUserProfile = (userProfile) => ({
  type: 'ADD_USER_PROFILE',
  payload: userProfile,
});

export const fetchCurrentUser = (userProfile) => ({
  type: 'GET_CURRENT_USER',
  payload: userProfile,
})

export const changeProfileContent = (name) => ({
  type: 'CHANGE_PROFILE_PAGE',
  payload: name,
})
  