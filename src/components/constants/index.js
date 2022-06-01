const marksInputParams = [
  {
    id: "cat1",
    min: 0,
    max: 30,
    placeholder: "Cat1",
    subscript: "Maximum 30",
  },
  {
    id: "cat2",
    min: 0,
    max: 30,
    placeholder: "Cat2",
    subscript: "Maximum 30",
  },
  {
    id: "internals",
    min: 0,
    max: 30,
    placeholder: "Internals (DA's + QUiz)",
    subscript: "Maximum 30",
  },
  {
    id: "fat",
    min: 0,
    max: 100,
    placeholder: "FAT (Expected)",
    subscript: "Maximum 100",
  },
  {
    id: "project",
    min: 0,
    max: 100,
    placeholder: "Total marks in Project",
    subscript: "Maximum 100",
  },
  {
    id: "lab",
    min: 0,
    max: 110,
    placeholder: "Total marks in Lab",
    subscript: "Maximum 110",
  },
];

const cgpaInputParams = [
  {
    id: "credsCompleted",
    min: 0,
    max: 180,
    placeholder: "Credits Completed",
    subscript: "Maximum 180",
  },
  {
    id: "currentCgpa",
    min: 0,
    max: 10,
    placeholder: "Current CGPA",
    subscript: "Maximum 10",
  },
  {
    id: "credsTaken",
    min: 0,
    max: 27,
    placeholder: "Credits Taken this sem",
    subscript: "Maximum 27",
  },
  {
    id: "gpaThisSem",
    min: 0,
    max: 10,
    placeholder: "GPA this Semester/Expected GPA ",
    subscript: "Maximum 10",
  },
];

const calculateCgpa = () => {
  // debugger;
  let credsCompleted = parseFloat(
    document.getElementById("credsCompleted").value
  );
  let currentCgpa = parseFloat(document.getElementById("currentCgpa").value);
  let credsTaken = parseFloat(document.getElementById("credsTaken").value);
  let gpaThisSem = parseFloat(document.getElementById("gpaThisSem").value);

  if (
    credsCompleted < 0 ||
    credsCompleted > 180 ||
    currentCgpa < 0 ||
    currentCgpa > 10 ||
    credsTaken < 0 ||
    credsTaken > 27 ||
    gpaThisSem < 0 ||
    gpaThisSem > 10
  ) {
    alert("Please enter Values within given Limits!");
    return null;
  } else if (
    isNaN(credsCompleted) ||
    isNaN(currentCgpa) ||
    isNaN(credsTaken) ||
    isNaN(gpaThisSem)
  ) {
    alert("Please enter all 4 Values!");
    return null;
  } else {
    let cgpa =
      (credsCompleted * currentCgpa + credsTaken * gpaThisSem) /
      (credsCompleted + credsTaken);
    cgpa = cgpa.toFixed(2);
    document.getElementById("cgpaResult").innerHTML = "CGPA : " + cgpa;

    return cgpa;
  }

  console.log(credsCompleted);
};
const calculateMarks = () => {
  // debugger;
  let cat1 = parseFloat(document.getElementById("cat1").value);
  let cat2 = parseFloat(document.getElementById("cat2").value);
  let internals = parseFloat(document.getElementById("internals").value);
  let fat = parseFloat(document.getElementById("fat").value);
  let project = parseFloat(document.getElementById("project").value);
  let lab = parseFloat(document.getElementById("lab").value);

  if (
    cat1 < 0 ||
    cat1 > 30 ||
    cat2 < 0 ||
    cat2 > 30 ||
    internals < 0 ||
    internals > 30 ||
    fat < 0 ||
    fat > 100 ||
    project < 0 ||
    project > 100 ||
    lab < 0 ||
    lab > 110
  ) {
    alert("Please enter Values within given Limits!");
    return null;
  } else if (
    isNaN(cat1) ||
    isNaN(cat2) ||
    isNaN(internals) ||
    isNaN(fat) ||
    isNaN(project) ||
    isNaN(lab)
  ) {
    alert("Please enter all 6 Values!");
    return null;
  } else {
    let marks =
      ((cat1 / 2 + cat2 / 2 + internals + fat * (2 / 5)) * 2 +
        project +
        lab * (100 / 110)) /
      4;
    marks = marks.toFixed(2);
    document.getElementById("marksResult").innerHTML =
      "Final Marks (100) : " + marks;
    return marks;
  }

  console.log(credsCompleted);
};
export default {
  marksInputParams,
  cgpaInputParams,
  calculateCgpa,
  calculateMarks,
};
