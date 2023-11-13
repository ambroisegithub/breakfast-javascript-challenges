
const MultTwonumbers = (A, B) => {
  if (isNaN(A) || isNaN(B)) {
    return "error";
  } else {
    return A * B;
  }
};

console.log(MultTwonumbers(10, "ii"));
