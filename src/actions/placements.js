import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_PLACEMENT
export const addPlacement = (placement) => ({
      type: 'ADD_PLACEMENT',
      placement
    });

export const startAddPlacement = (placementData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      companyName = '',
      packages = '',
      cgpa = '',
      branch = '',
      noOfRounds = '',
      description = '',
      individualDescription = [],
      preparation = '',
      date = '',
      advice = '',
      comments = [],
      like = 0,
    } = placementData;
    const placement = {name,companyName,description,packages,cgpa,branch,noOfRounds,individualDescription,preparation,date,advice,comments,like};

    database.ref('placements').push(placement).then((ref) => {
      dispatch(addPlacement({
        id: ref.key,
        ...placement
      }));
    });
  };
};

//SET_PLACEMENTS
export const setPlacements = (placements) => ({
  type: 'SET_PLACEMENTS',
  placements
});

export const startSetPlacements = () => {
  return (dispatch) => {
    return database.ref('placements').once('value').then((snapshot) => {
      const placements = [];

      snapshot.forEach((childSnapshot) => {
        placements.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setPlacements(placements));
    });
  };
};