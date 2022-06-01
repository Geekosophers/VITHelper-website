import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import cat1papersReducer from "../reducers/cat1papers";
import cat2papersReducer from "../reducers/cat2papers";
import fatpapersReducer from "../reducers/fatpapers";
import usersReducer from "../reducers/users";
import materialsReducer from "../reducers/materials";
import faqsReducer from "../reducers/faqs";
import placementsReducer from "../reducers/placements";
import filterReducer from "../reducers/filter";
import gpaReducer from "../reducers/gpa";
import cgpaReducer from "../reducers/cgpa";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      cat1papers: cat1papersReducer,
      cat2papers: cat2papersReducer,
      fatpapers: fatpapersReducer,
      users: usersReducer,
      materials: materialsReducer,
      faqs: faqsReducer,
      placements: placementsReducer,
      filter: filterReducer,
      gpa: gpaReducer,
      cgpa: cgpaReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
