//TEACHERS REDUCER
const teachersReducerDefaultState = []

export default (state = teachersReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_TEACHER':
      return state.concat(action.teacher);
    case 'SET_TEACHERS':
      return action.teachers;
    default:
      return state;
  }
};

