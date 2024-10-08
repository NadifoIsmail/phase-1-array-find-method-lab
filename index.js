const record = [
  { year: "2020", result: "W" },
  { year: "2018", result: "N/A" },
  { year: "2015", result: "L" },
];

function superbowlWin(record) {
  const result = record.find(element => element.result === "W");

  if (result) {
    return result.year;
  } else {
    return undefined;
  }
}

console.log(superbowlWin(record));
