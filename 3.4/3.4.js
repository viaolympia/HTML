// script.js

function modifyArray(inputArray) {
    inputArray.unshift("start");
    inputArray.pop();
    if (inputArray.length >= 2) {
        inputArray[1] = "modified";
    }
    return inputArray.join(', ');
}

function arrayOperations(inputArray) {
    inputArray.push("end");
    inputArray.shift();
    inputArray.splice(3, 0, "middle");
    return inputArray.join(', ');
}

function checkInteger(number) {
    if (Number.isInteger(number)) {
        return "„исло ц≥ле";
    } else {
        return "„исло не ц≥ле";
    }
}
