//GET VISIBLE CAT1PAPERS
export default (cat1papers, {text}) => {
    return cat1papers.filter((cat1paper) => {
      const textMatch = cat1paper.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });
  };