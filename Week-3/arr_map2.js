const kvArr = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

// const reformatted = kvArr.map (
//     ({ key, value }) => ({ [key]: value })
// );

// console.log(reformatted);

console.log(kvArr.map (({ key, value }) => ({ [key]: value })));

// Output:
// [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]