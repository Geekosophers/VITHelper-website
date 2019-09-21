//MATERIALS REDUCER
const materialsReducerDefaultState = []

export default (state = materialsReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_MATERIAL':
      return state.concat(action.material);
    case 'SET_MATERIALS':
      return action.materials;
    default:
      return state;
  }
};