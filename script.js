function isSameType(value1, value2) {
  const isNaN1 = typeof value1 === "number" && isNaN(value1);
  const isNaN2 = typeof value2 === "number" && isNaN(value2);

  if (isNaN1 && isNaN2) {
    return true;
  }

  return typeof value1 === typeof value2;
}


// do not change the code below.
let value1 = ("Enter Start of the Range.");
let value2 = ("Enter End Of the Range.");
alert(isSameType(value1, value2));
