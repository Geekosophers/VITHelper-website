//GET VISIBLE CAT2PAPERS
export default (cat2papers, {text}) => {
    return cat2papers.filter((cat2paper) => {
      const textMatch = cat2paper.name[0].toLowerCase().includes(text.toLowerCase());
      const textMatch1 = cat2paper.name[1].toLowerCase().includes(text.toLowerCase());
      return textMatch || textMatch1;
    });
  };