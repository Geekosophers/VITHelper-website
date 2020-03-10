import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_FATPAPER
export const addFatpaper = (fatpaper) => ({
      type: 'ADD_FATPAPER',
      fatpaper
    });

export const startAddFatpaper = (fatpaperData = {}) => {
  return (dispatch) => {
    const {
      name = [],
      file_name = '',
      lock_status = 1,
      unique_id = 11
    } = fatpaperData;
    const fatpaper = {name,file_name,lock_status,unique_id};

    database.ref('fat').push(fatpaper).then((ref) => {
      dispatch(addFatpaper({
        id: ref.key,
        ...fatpaper
      }));
    });
  };
};

//SET_FATPAPERS
export const setFatpapers = (fatpapers) => ({
  type: 'SET_FATPAPERS',
  fatpapers
});

export const startSetFatpapers = () => {
  return (dispatch) => {
    return database.ref('fat').once('value').then((snapshot) => {
      const fatpapers = [];

      snapshot.forEach((childSnapshot) => {
        fatpapers.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setFatpapers(fatpapers));
    });
  };
};