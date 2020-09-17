let reverseString = (input) => {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed = reversed + input[i];
  }
  return reversed;
};
console.log(reverseString("Marcel"));

function isThisWorking(input) {
  console.log(
    "Printing: isThisWorking was called and " +
      input +
      " was passed in as an argument."
  );
  return "Returning: I am returning this string!";
}

isThisWorking(3);
