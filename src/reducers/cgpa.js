const cgpaReducer=(state=null,action)=>{
    switch(action.type){
        case "SET_CGPA":
            return action.cgpa;
        default :
            return state;
    }
}

export default cgpaReducer;