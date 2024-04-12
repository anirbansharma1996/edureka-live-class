function EvenAvg(num) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
      count++;
    }
  }
  console.log(sum / count);
}
EvenAvg(10);
