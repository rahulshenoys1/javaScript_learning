/* copy paste the code snippet to the new.js file to run seperately*/

//1. print Hello world 10 times using while, do-while and for
/*
//while
let i = 0;

while (i < 10) {
  console.log("hello world!");
  i++;
}

//do-while
let i = 0;
do {
  console.log("hello world!!");
  i++;
} while (i < 10); 

//for
for (let i = 0; i < 10; i++) {
  console.log("hello world!!"); 
}

//2. Print Hello with number (as Hello1, Hello2, Hello3...till Hello10) to the monitor.

//while 
let i=1;

while(i<=10)
{
    console.log("Hello "+i);
    i++;
} 

//do-while
let i =1;
do{
    console.log("Hello "+i);
    i++;
}while(i<=10); 

//for
for (let i = 1; i <= 10; i++) {
  console.log("Hello " + i);
} 

// 3. Print 1 to 10 to the monitor using for, while, do..while

//while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} 

//do-while
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10); 

//for
for (let i = 1; i <= 10; i++) {
  console.log(i);
} 

//4. Print all odd numbers from 1 to 100 to the monitor

function printOddNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printOddNumbers(1, 100); 

//5. Print all even numbers except multiples of 10 from 1 to 100 to the monitor

function printEvenNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0 && i % 10 !== 0) {
      console.log(i);
    }
  }
}
printEvenNumbers(1, 100);

//6. Print all non multiples of 3 between 100 to 1 to the monitor

function printNonMultiple(start, end) {
  for (let i = start; i >= end; i--) {
    if (i % 3 !== 0) {
      console.log(i);
    }
  }
}

printNonMultiple(100,1);  

//7. Print "even" and the number or "odd" and the number between 1-100 ( odd 1, even 2,odd 3 and so on in each line).

function printOddEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log("Even " + i);
    } else {
      console.log("odd " + i);
    }
  }
}

printOddEven(1, 100); 

// 8. Print "divisible" and the number if the num is divisible by 3 or 5 and not both between 1-100.

function printDivisibleBy(start,end){
  for(let i=start;i<=end;i++){
    if((i %3 === 0 ||i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0))
    {
      console.log("divisble "+i);
    }
  }
}

printDivisibleBy(1,100); 

// 9. Print multiplication tables for an int variable (say with value 15) from 1 to 10 to the monitor. Do this with for, while, do..while. Which do you think is the right control statement to use?

//for
let num = 15;
for (let i = 1; i <= 10; i++) {
  console.log(num + " * " + i + " = " + num * i);
}  

//while
let num = 15;
let i = 1;
while (i <= 10) {
  console.log(num + " * " + i + " = " + num * i);
  i++;
} 

//do while
let num = 5;
let i = 1;
do {
  console.log(num + " * " + i + " = " + num * i);
  i++;
} while (i <= 10); 

// 10. Print the muliplication tables for all values from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication table for ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log(); // Empty line between tables for better readability
} 

 11. Have a variable containing a test score between 1-100. Now write a code snippet to
find out the grade of the score. If the score is > 90, then the grade is A. 70-90 -> B, 50-70 -
> C, 30-50 -> D, < 30 - FAIL. Verify the output with different scores.

function findGrade(score) {
  let grade;
  if (score > 90) {
    grade = "A";
  } else if (score >= 70 && score <= 90) {
    grade = "B";
  } else if (score >= 50 && score < 70) {
    grade = "C";
  } else if (score >= 30 && score < 50) {
    grade = "D";
  } else {
    grade = "FAIL";
  }
  return grade;
}

const scores = [95, 80, 60, 40, 25];

scores.forEach((score) => {
  const grade = findGrade(score);
  console.log(`Score: ${score}, Grade: ${grade}`);
}); 

// 12. write a program to check if year is a leap year.

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const years = [2020, 2021, 2022, 2023, 2024];

years.forEach((year) => {
  const result = isLeapYear(year);
  console.log(`${year} is a leap year: ${result}`);
}); */

/*13. Write a program to print the number of days in a given month and year (1 implies Jan
which means 31 should be printed out, 2 implies Feb which implies that 28 or 29 should be
printed depending on whether the year is a leap year and so on). Do this by only using “if”
and then with “switch”.  

function daysInMonthUsingIf(month, year) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return 31;
  } else if (month === 4 || month == 6 || month == 9 || month === 12) {
    return 30;
  } else if (month == 2) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  } else {
    return -1;
  }
}

const month = 7;
const year = 2025;
const result = daysInMonthUsingIf(month, year);
console.log(`${result} days in month ${month} of year ${year}`); 

function daysInMonthUsingSwitch(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    default:
      return -1;
  }
}

const month =2;
const year =2023
const resultUsingSwitch = daysInMonthUsingSwitch(month, year);
console.log(
  `Using "switch" statements: ${resultUsingSwitch} days in month ${month} of year ${year}`
); 

 14. Print ten powers of a number given (ex: if num is 2, print value of 2 pow 1, then 2 pow
  2, then 2 pow 3... till 2 pow 10).14) Given an int value, print all its divisors (if 10 is the num,
  divisors are 1,2,5,10. If 15 is the num, 1,3,5,15 are the divisors). 

function printPowers(base, exponent, limit) {
  for (let i = 1; i <= limit; i++) {
    const result = Math.pow(base, i);
    console.log(`${base}^${i}=${result}`);
  }
} 

printPowers(2, 10, 10); */

function printDivisors(num) {
  console.log(`Divisors of ${num}:`);
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
}

printDivisors(15);
