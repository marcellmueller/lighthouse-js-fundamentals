const whichSchool = (age) => {
  if (age >= 1 && age <= 12) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else if (age >= 19 && age <= 100) {
    return "Lighthouse Labs";
  }
};
