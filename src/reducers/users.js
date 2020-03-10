//USERS REDUCER
const usersReducerDefaultState = []

export default (state = usersReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_USER':
      return state.concat(action.user);
    case 'SET_USERS':
      return action.users;
    default:
      return state;
  }
};