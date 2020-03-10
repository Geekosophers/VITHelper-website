//GET VISIBLE FAQS
export default (faqs, {text}) => {
    return faqs.filter((faq) => {
      const textMatch = faq.question.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });
  };