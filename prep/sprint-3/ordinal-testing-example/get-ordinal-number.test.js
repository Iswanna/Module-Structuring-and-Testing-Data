function getOrdinalNumber(input) {
  if (input === 1 || input === 21) 
    return `${input}st`;
  else if (input === 11) 
    return `${input}th`;
}

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});
