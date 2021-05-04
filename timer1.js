/*
For this app, we can think of at least these three:
No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
 */
const args = process.argv.slice(2);
console.log(args);

for (const elem of args) {
  let number = Number(elem)
  if(number > 0 && number){
    setTimeout(() => {
      process.stdout.write('\x07')
    }, elem * 1000);
  }
}