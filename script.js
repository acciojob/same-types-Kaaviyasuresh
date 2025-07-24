function isSameType(value1, value2) {
    if (isNaN(value1) && isNaN(value2)) {
        return true; // both are NaN
    }
    return typeof value1 === typeof value2; // compare types
}



