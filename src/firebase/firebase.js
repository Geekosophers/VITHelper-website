import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
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
