//GET VISIBLE PLACEMENTS
export default (placements, {text}) => {
    return placements.filter((placement) => {
      const textMatch = placement.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });
  };