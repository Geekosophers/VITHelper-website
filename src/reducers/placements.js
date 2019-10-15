//PLACEMENTS REDUCER
const placementsReducerDefaultState = []

export default (state = placementsReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_PLACEMENT':
      return state.concat(action.placement);
    case 'SET_PLACEMENTS':
      return action.placements;
    default:
      return state;
  }
};