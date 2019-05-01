import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_TEACHER
export const addTeacher = (teacher) => ({
      type: 'ADD_TEACHER',
      teacher
    });

export const startAddTeacher = (teacherData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      comments = [],
      like = 0,
    } = teacherData;
    const teacher = {name,comments,like};

    database.ref('teachers').push(teacher).then((ref) => {
      dispatch(addTeacher({
        id: ref.key,
        ...teacher
      }));
    });
  };
};

//SET_TEACHERS
export const setTeachers = (teachers) => ({
  type: 'SET_TEACHERS',
  teachers
});

export const startSetTeachers = () => {
  return (dispatch) => {
    return database.ref('teachers').once('value').then((snapshot) => {
      const teachers = [];

      snapshot.forEach((childSnapshot) => {
        teachers.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setTeachers(teachers));
    });
  };
};