function Sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
function Mult(...args) {
  return args.reduce((a, b) => a * b, 1);
}
function Subs(...args) {
  return args.reduce((a, b) => a - b, 0);
}
// module.exports.Sum = Sum;
// module.exports.Mult = Mult;
// module.exports.Subs = Subs;
module.exports = { Sum, Mult, Subs };
