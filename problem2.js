function buttonFunction() {
    var result = problem2();
    document.getElementById("resultInput").value = result;
    console.log(result);
}

function problem2() {
    var fiboArray = fiboUntil(4000000);
    return sumEvenValues(fiboArray);
}

function fiboUntil(limit) {
    var fiboArray = [1, 1];
    var index = 2;
    var limitReached = false;
    while (!limitReached) {
        var currentFiboNumber = fiboArray[index - 2] + fiboArray[index - 1];
        if (currentFiboNumber < limit) {
            fiboArray.push(currentFiboNumber);
        } else {
            limitReached = true;
        }
    }
    return fiboArray;
}

function sumEvenValues(array) {
    return array.reduce(function (acc, cur) {
        if (cur % 2 == 0) {
            return acc + cur;
        } else {
            return acc;
        }
    }, 0)
}