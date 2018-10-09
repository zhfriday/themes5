"use strict";

function name(firstString, secondString) {
    let index;
    let firstArr = firstString.split("");
    let secondArr = secondString.split("");

    if (firstArr.length != secondArr.length) {
        return false;
    }
    while (index < firstArr.length) {
        index += 2
        if (secondArr.indexOf(firstArr[index]) % 2 || secondArr.indexOf(firstArr[index]) == -1) {
            return false;
        }
    }
    while (index < firstArr.length) {
        index += 2
        if (!(secondArr.indexOf(firstArr[index]) % 2) || secondArr.indexOf(firstArr[index]) == -1) {
            return false;
        }
    }
    return true;
}

console.log(name("abcd", "cbda"));