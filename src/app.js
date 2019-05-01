import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import LoginPage from './components/LoginPage';
import { startAddTeacher, startSetTeachers } from './actions/teachers';
import { setTextFilter} from './actions/filter';
import getVisibleTeachers from './selectors/teachers';
 
const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleTeachers = getVisibleTeachers(state.teachers,state.filter);
//   console.log(visibleTeachers);
// });

// store.dispatch(startAddTeacher({ name: 'Anshul',comments:['c1','c2']}))
// store.dispatch(startAddTeacher({ name: 'Rahul',comments:['c1','c2']}))
// store.dispatch(startAddTeacher({ name: 'Raman',comments:['c2','c3'],like:1}))

//store.dispatch(setTextFilter('ans'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(startSetTeachers()).then(() => {
      ReactDOM.render(jsx, document.getElementById('app'));
    });
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// store.dispatch(startSetTeachers()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app'));
// });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
