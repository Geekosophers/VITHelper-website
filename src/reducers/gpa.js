const gpaReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_GPA":
      return action.gpa;
    default:
      return state;
  }
};

export default gpaReducer;
