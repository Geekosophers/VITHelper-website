import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_CAT2PAPER
export const addCat2paper = (cat2paper) => ({
      type: 'ADD_CAT2PAPER',
      cat2paper
    });

export const startAddCat2paper = (cat2paperData = {}) => {
  return (dispatch) => {
    const {
      name = [],
      file_name = '',
      lock_status = 1,
      unique_id = 11
    } = cat2paperData;
    const cat2paper = {name,file_name,lock_status,unique_id};

    database.ref('cat2').push(cat2paper).then((ref) => {
      dispatch(addCat2paper({
        id: ref.key,
        ...cat2paper
      }));
    });
  };
};

//SET_CAT2PAPERS
export const setCat2papers = (cat2papers) => ({
  type: 'SET_CAT2PAPERS',
  cat2papers
});

export const startSetCat2papers = () => {
  return (dispatch) => {
    return database.ref('cat2').once('value').then((snapshot) => {
      const cat2papers = [];

      snapshot.forEach((childSnapshot) => {
        cat2papers.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setCat2papers(cat2papers));
    });
  };
};