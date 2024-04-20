let marks = [54, 34, 23, 78, 68, 65];
let avg = 0;
for (let mark of marks) {
  avg += mark;
}
avg /= marks.length;
console.log(avg);