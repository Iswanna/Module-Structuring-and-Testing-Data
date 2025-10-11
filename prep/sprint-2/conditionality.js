//function checkDivisibility(a, b) {
//if (a % b === 0) {
//return `${a} is divisible by ${b}`;
//}

//return `${a} is not divisible by ${b}`;
//}

//console.log(checkDivisibility(10, 2));
//console.log(checkDivisibility(50, 3));

function getCountryCode(phoneNumber) {
  if (phoneNumber.startsWith("+44")) {
    return "UK";
  } else if (phoneNumber.startsWith("+98")) {
    return "IR";
  } else if (phoneNumber.startsWith("+64")) {
    return "US";
  }
  return "Unknown";
}

let code = getCountryCode("+447831620328");
console.log(`+44 is ${code}`);
code = getCountryCode("+989871783972");
console.log(`+98 is ${code}`);
code = getCountryCode("+649871783972");
console.log(`+64 is ${code}`);
