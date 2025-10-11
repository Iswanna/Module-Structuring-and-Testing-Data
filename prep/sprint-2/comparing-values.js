//function formatAs12HourClock() {

//}

//console.log(formatAs12HourClock("08:00") === "08:00am")

function compareTwoNumbers (a , b) {
    if (a > b) {
        return `${a} is greater than ${b};`
    }
    else if (a === b) {
        return `${a} is equals to ${b}`;
    }
    return `${b} is greater than ${a}`;
}

const compareResult = compareTwoNumbers(Number("100") , Number("100"));
console.log(compareResult);