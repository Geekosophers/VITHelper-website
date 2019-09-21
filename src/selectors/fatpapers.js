//GET VISIBLE FATPAPERS
export default (fatpapers, {text}) => {
    return fatpapers.filter((fatpaper) => {
      const textMatch = fatpaper.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });
  };