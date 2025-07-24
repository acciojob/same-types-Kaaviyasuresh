function isSameType(value1, value2) {
  // Check if both are NaN (special case because NaN !== NaN)
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Otherwise, check if types match
  return typeof value1 === typeof value2;
}


// do not change the code below.
let value1 = ("Enter Start of the Range.");
let value2 = ("Enter End Of the Range.");
alert(isSameType(value1, value2));
