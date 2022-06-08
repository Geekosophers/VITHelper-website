import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/Pages/LoadingPage';
import { startSetCat1papers } from './actions/cat1papers';
import { startSetCat2papers } from './actions/cat2papers';
import { startSetFatpapers } from './actions/fatpapers';
import { startSetMaterials } from './actions/materials';
import { startSetFaqs } from './actions/faqs';
import { startSetPlacements } from './actions/placements';
import TeamBuildingModal from './components/TeamBuildingModal';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <div>
      {
        window.location.pathname!=="/blogs" ? <TeamBuildingModal /> : null 
      }
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

firebase.auth().onAuthStateChanged((user) => {
    setTimeout(() => {
      renderApp();
    }, 2300)
});