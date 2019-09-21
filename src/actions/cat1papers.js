import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_CAT1PAPER
export const addCat1paper = (cat1paper) => ({
      type: 'ADD_CAT1PAPER',
      cat1paper
    });

export const startAddCat1paper = (cat1paperData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      comments = [],
      like = 0,
    } = cat1paperData;
    const cat1paper = {name,comments,like};

    database.ref('cat1papers').push(cat1paper).then((ref) => {
      dispatch(addCat1paper({
        id: ref.key,
        ...cat1paper
      }));
    });
  };
};

//SET_CAT1PAPERS
export const setCat1papers = (cat1papers) => ({
  type: 'SET_CAT1PAPERS',
  cat1papers
});

export const startSetCat1papers = () => {
  return (dispatch) => {
    return database.ref('cat1papers').once('value').then((snapshot) => {
      const cat1papers = [];

      snapshot.forEach((childSnapshot) => {
        cat1papers.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setCat1papers(cat1papers));
    });
  };
};