// const calculation = 10 + 32;
// const result = 40;
// console.assert(calculation === result);

// function formatAs12HourClock() {}
// console.log(formatAs12HourClock())
// console.assert(formatAs12HourClock("08:00") === "08:00 am" , `current output: ${formatAs12HourClock("08:00")} , target output: 08:00 am`);

function formatAs12HourClock(time) {
  const timeConvertedToNumber = Number(time.slice(0, 2));
  if (timeConvertedToNumber === 00) {
    return `12 am`;
  } else if (timeConvertedToNumber < 12) {
    return `${time} am`;
  } else if (timeConvertedToNumber > 12) {
    const subtract12FromTime = timeConvertedToNumber - 12;
    return `${subtract12FromTime} pm`;
  } else if (timeConvertedToNumber === 12) {
    return `${time} pm`;
  }
}

const formatAs12HourClockResult = formatAs12HourClock("20:00");
console.log(formatAs12HourClockResult);

//const currentOutput = formatAs12HourClock("08:00");
//const targetOutput = "08:00 am";
//console.assert(
//currentOutput === targetOutput,
//`current output: ${currentOutput}, target output: ${targetOutput}`
//);

//const currentOutput2 = formatAs12HourClock("23:00");
//const targetOutput2 = "11:00 pm";
//console.assert(
//currentOutput2 === targetOutput2,
// `//current output: ${currentOutput2}, target output: ${targetOutput2}`
//);
