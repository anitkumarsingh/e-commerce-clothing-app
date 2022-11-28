export const setCurrentUser = (user) => {
  console.log('ac',user)
  return{
    type: 'SET_CURRENT_USER', payload: user 
  }
};
