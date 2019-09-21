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
      name = '',
      comments = [],
      like = 0,
    } = fatpaperData;
    const fatpaper = {name,comments,like};

    database.ref('fatpapers').push(fatpaper).then((ref) => {
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
    return database.ref('fatpapers').once('value').then((snapshot) => {
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