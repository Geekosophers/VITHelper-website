import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_MATERIAL
export const addMaterial = (material) => ({
      type: 'ADD_MATERIAL',
      material
    });

export const startAddMaterial = (materialData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      comments = [],
      like = 0,
    } = materialData;
    const material = {name,comments,like};

    database.ref('materials').push(material).then((ref) => {
      dispatch(addMaterial({
        id: ref.key,
        ...material
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