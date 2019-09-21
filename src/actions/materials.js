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

//SET_MATERIALS
export const setMaterials = (materials) => ({
  type: 'SET_MATERIALS',
  materials
});

export const startSetMaterials = () => {
  return (dispatch) => {
    return database.ref('materials').once('value').then((snapshot) => {
      const materials = [];

      snapshot.forEach((childSnapshot) => {
        materials.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setMaterials(materials));
    });
  };
};