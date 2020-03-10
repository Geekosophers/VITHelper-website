import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_USER_CAT1
export const addCat1User = (cat1user) => ({
      type: 'ADD_CAT1USER',
      cat1user
    });

export const startAddCat1User = (cat1userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(cat1userData);
    const {
      cat1paper_id = ''
    } = cat1userData;
    const cat1user = {cat1paper_id};

    // database.ref(`users/${uid}/cat1papers`).update({ coins:10 });

    database.ref(`users/${uid}/cat1papers`).push(cat1user).then((ref) => {
      dispatch(addCat1User({
        id: ref.key,
        ...cat1user
      }));
    });

    // database.ref('users').push(user).then((ref) => {
    //   dispatch(addUser({
    //     id: ref.key,
    //     ...user
    //   }));
    // });
  };
};

//ADD_USER_CAT2
export const addCat2User = (cat2user) => ({
  type: 'ADD_CAT2USER',
  cat2user
});

export const startAddCat2User = (cat2userData = {}) => {
return (dispatch, getState) => {
const uid = getState().auth.uid;
console.log(cat2userData);
const {
  cat2paper_id = ''
} = cat2userData;
const cat2user = {cat2paper_id};

// database.ref(`users/${uid}/cat1papers`).update({ coins:10 });

database.ref(`users/${uid}/cat2papers`).push(cat2user).then((ref) => {
  dispatch(addCat2User({
    id: ref.key,
    ...cat2user
  }));
});

// database.ref('users').push(user).then((ref) => {
//   dispatch(addUser({
//     id: ref.key,
//     ...user
//   }));
// });
};
};

//ADD_USER_FAT
export const addFatUser = (fatuser) => ({
  type: 'ADD_FATUSER',
  fatuser
});

export const startAddFatUser = (fatuserData = {}) => {
return (dispatch, getState) => {
const uid = getState().auth.uid;
console.log(fatuserData);
const {
  fatpaper_id = ''
} = fatuserData;
const fatuser = {fatpaper_id};

// database.ref(`users/${uid}/fatpapers`).update({ coins:10 });

database.ref(`users/${uid}/fatpapers`).push(fatuser).then((ref) => {
  dispatch(addFatUser({
    id: ref.key,
    ...fatuser
  }));
});

// database.ref('users').push(user).then((ref) => {
//   dispatch(addUser({
//     id: ref.key,
//     ...user
//   }));
// });
};
};

//SET_USERS
export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const startSetUsers = () => {
  return (dispatch) => {
    return database.ref('users').once('value').then((snapshot) => {
      const users = [];

      snapshot.forEach((childSnapshot) => {
        users.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setUsers(users));
    });
  };
};