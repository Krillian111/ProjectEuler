function buttonFunction() {
    var array = multiplesBelow1000();
    var result = sumArray(array);
    document.getElementById("resultInput").value = result;
    console.log(result);
}

function multiplesBelow1000() {
    var current = 1;
    var multiples = [];
    while (current < 1000) {
        if (current % 3 === 0 || current % 5 === 0) {
            multiples.push(current);
        }
        current++;
    }
    return multiples;
}

function sumArray(array) {
    var sum = array.reduce(function (acc, cur) {
        return acc + cur;
    }, 0)
    return sum;
}
