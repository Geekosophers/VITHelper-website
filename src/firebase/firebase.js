import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCBfxTq-enEyDNaT1mDDx_dffeaxPPtWVA",
  authDomain: "vithelper-32e0b.firebaseapp.com",
  databaseURL: "https://vithelper-32e0b.firebaseio.com",
  projectId: "vithelper-32e0b",
  storageBucket: "vithelper-32e0b.appspot.com",
  messagingSenderId: "571499579120"
};
firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

// database.ref().set({
//   teacher1:{
//     commen1:"c1",
//     comment2:"c2",
//     comment3:"c3"
//   },
//   teacher2:{
//     coment1:"c4",
//     comment2:"c5",
//     comment3:"c6"
//   },
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('This filed.',e);
// });

// database.ref('details/name')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref()
//  .on('value', (snapshot) => {
//    const val = snapshot.val();
//    const paper = [];
//    val.map((paper) => {
//     console.log(paper.val());
//    });
// //    {props.fatpapers.map((fatpaper) => {
// //     return <FatpapersListItem key={fatpaper.id} fatpaper={fatpaper} />; 
// // })}
//    console.log(val.fats.hell);
//  });

//setTimeout(() => {
//  database.ref('details/name').set('Anshul');
//},3500);

//database.ref('details/name')
//  .once('value')
//  .then((snapshot) => {
//    const val = snapshot.val();
//    console.log(val);
//  })
//  .catch((e) => {
//    console.log('Error fetching data', e);
//  });
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { storage, firebase, googleAuthProvider, database as default };
