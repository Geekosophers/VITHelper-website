//FATPAPERS REDUCER
const fatpapersReducerDefaultState = []

export default (state = fatpapersReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_FATPAPER':
      return state.concat(action.fatpaper);
    case 'SET_FATPAPERS':
      return action.fatpapers;
    default:
      return state;
  }
};