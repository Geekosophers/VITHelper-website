//GET VISIBLE MATERIALS
export default (materials, {text}) => {
    return materials.filter((material) => {
      const textMatch = material.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });
  };