const gpaReducer=(state=0,action)=>{
    switch(action.type){
        case "SET_GPA":
            return action.gpa;
        default :
            return state;
    }
}