//GET VISIBLE FATPAPERS
export default (fatpapers, {text}) => {
    return fatpapers.filter((fatpaper) => {
      const textMatch = fatpaper.name[0].toLowerCase().includes(text.toLowerCase());
      const textMatch1 = fatpaper.name[1].toLowerCase().includes(text.toLowerCase());
      return textMatch || textMatch1;
    });
  };