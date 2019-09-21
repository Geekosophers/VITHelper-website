//GET VISIBLE CAT2PAPERS
export default (cat2papers, {text}) => {
    return cat2papers.filter((cat2paper) => {
      const textMatch = cat2paper.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });
  };