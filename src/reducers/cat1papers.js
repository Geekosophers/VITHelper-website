//CAT1PAPERS REDUCER
const cat1papersReducerDefaultState = []

export default (state = cat1papersReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_CAT1PAPER':
      return state.concat(action.cat1paper);
    case 'SET_CAT1PAPERS':
      return action.cat1papers;
    default:
      return state;
  }
};