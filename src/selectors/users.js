//GET VISIBLE USERS
export default (users, {text}) => {
    return users.filter((user) => {
      const textMatch = user.name[0].toLowerCase().includes(text.toLowerCase());
      const textMatch1 = user.name[1].toLowerCase().includes(text.toLowerCase());
      return textMatch || textMatch1;
    });
  };