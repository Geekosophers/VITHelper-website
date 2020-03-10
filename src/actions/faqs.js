import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_FAQ
export const addFaq = (faq) => ({
      type: 'ADD_FAQ',
      faq
    });

export const startAddFaq = (faqData = {}) => {
  return (dispatch) => {
    const {
      question = '',
      answer = '',
    } = faqData;
    const faq = {question,answer};

    database.ref('faqs').push(faq).then((ref) => {
      dispatch(addFaq({
        id: ref.key,
        ...faq
      }));
    });
  };
};

//SET_FAQS
export const setFaqs = (faqs) => ({
  type: 'SET_FAQS',
  faqs
});

export const startSetFaqs = () => {
  return (dispatch) => {
    return database.ref('faqs').once('value').then((snapshot) => {
      const faqs = [];

      snapshot.forEach((childSnapshot) => {
        faqs.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setFaqs(faqs));
    });
  };
};