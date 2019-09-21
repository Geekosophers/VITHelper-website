//CAT2PAPERS REDUCER
const cat2papersReducerDefaultState = []

export default (state = cat2papersReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_CAT2PAPER':
      return state.concat(action.cat2paper);
    case 'SET_CAT2PAPERS':
      return action.cat2papers;
    default:
      return state;
  }
};

