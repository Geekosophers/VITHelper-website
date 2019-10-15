//GET VISIBLE CAT1PAPERS
export default (cat1papers, {text}) => {
    return cat1papers.filter((cat1paper) => {
      const textMatch = cat1paper.name[0].toLowerCase().includes(text.toLowerCase());
      const textMatch1 = cat1paper.name[1].toLowerCase().includes(text.toLowerCase());
      return textMatch || textMatch1;
    });
  };