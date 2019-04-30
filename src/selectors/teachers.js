//GET VISIBLE TEACHERS
export default (teachers, {text}) => {
    return teachers.filter((teacher) => {
      const textMatch = teacher.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });
  };