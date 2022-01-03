import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
// import TeamBuildingModal from './components/TeamBuildingModal';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database from './firebase/firebase';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import LoginPageNew from './components/LoginPageNew';
import { startAddCat1paper, startSetCat1papers } from './actions/cat1papers';
import { startAddCat2paper, startSetCat2papers } from './actions/cat2papers';
import { startAddFatpaper, startSetFatpapers } from './actions/fatpapers';
import { startAddUser, startSetUsers } from './actions/users';
import { startAddMaterial, startSetMaterials } from './actions/materials';
import { startAddFaq, startSetFaqs } from './actions/faqs';
import { startAddPlacement, startSetPlacements } from './actions/placements';
import { setTextFilter} from './actions/filter';

const store = configureStore();



const jsx = (
  <Provider store={store}>
    <div>
      {/* <TeamBuildingModal /> */}
      <AppRouter />
    </div>
  </Provider>
);



let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(startSetCat2papers());
    store.dispatch(startSetFatpapers());
    store.dispatch(startSetMaterials());
    store.dispatch(startSetFaqs());
    store.dispatch(startSetPlacements());
    store.dispatch(startSetCat1papers()).then(() => {
      try{
        ReactDOM.render(jsx, document.getElementById('app'));
      }      
      catch(e){}
    });
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// renderApp();

// setTimeout(() => {
//   renderApp();
// }, 2300)

// store.dispatch(startSetTeachers()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app'));
// });

firebase.auth().onAuthStateChanged((user) => {
  // if (user) {
    // console.log(firebase.auth().currentUser.photoURL);
    // store.dispatch(login(user.uid));
    // renderApp();
    setTimeout(() => {
      renderApp();
    }, 2300)
    // if new user comes then only the below line should run
    // database.ref(`users/`)
    //     .once('value')
    //     .then((snapshot) => {
    //         const users = [];
    //         const usersList = [];

    //         snapshot.forEach((childSnapshot) => {
    //           users.push({
    //               id: childSnapshot.key,
    //               ...childSnapshot.val()
    //             });
    //         });
    //         for (var i = 0, len = users.length; i < len; i++) {
    //           usersList.push(users[i].id);
    //         }
    //         if(!usersList.includes(user.uid)){
    //           database.ref(`users/${user.uid}/`).update({ coins:30 });
    //         }
    //     });
    // console.log(history);
    // if (history.location.pathname === '/') {
    //   history.push('/placements');
    // }
//   } else {
//     store.dispatch(logout());
//     // renderApp();
//     setTimeout(() => {
//       renderApp();
//     }, 2300)
//     history.push('/');
//   }
});
