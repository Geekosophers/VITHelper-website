import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import cat1papersReducer from '../reducers/cat1papers';
import cat2papersReducer from '../reducers/cat2papers';
import fatpapersReducer from '../reducers/fatpapers';
import materialsReducer from '../reducers/materials';
import filterReducer from '../reducers/filter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      cat1papers: cat1papersReducer,
      cat2papers: cat2papersReducer,
      fatpapers: fatpapersReducer,
      materials: materialsReducer, 
      filter: filterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

//STORE CREATION
/*const store = createStore(
  combineReducers({
    teachers: teachersReducer,
    filter: filterReducer
  })
);*/
