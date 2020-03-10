//FAQS REDUCER
const faqsReducerDefaultState = []

export default (state = faqsReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_FAQ':
      return state.concat(action.faq);
    case 'SET_FAQS':
      return action.faqs;
    default:
      return state;
  }
};