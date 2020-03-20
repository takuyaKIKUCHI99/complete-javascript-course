/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/

// 1
const mark = {
  mass: 60,
  height: 1.7
};

const john = {
  mass: 90,
  height: 1.8
};

// 2
const calcurateBMI = (mass, height) => mass / (height * height);

const markBMI = calcurateBMI(mark.mass, mark.height);
const johnBMI = calcurateBMI(john.mass, john.height);

// 3, 4
if (markBMI > johnBMI) {
  console.log("Mark has higher BMI than John.");
} else {
  console.log("John has higher BMI than Mark.");
}
/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

const johnTeam = [89, 120, 103];
const mikeTeam = [116, 94, 123];

// 1
const average = score => {
  const sum = score.reduce((accumulate, current) => accumulate + current);
  return sum / score.length;
};
console.log(average(johnTeam));
console.log(average(mikeTeam));

// 2, 3
if (average(johnTeam) > average(mikeTeam)) {
  console.log(
    `John's team scores more than Mike's team as their average score is ${average(
      johnTeam
    )}`
  );
} else if (average(johnTeam) < average(mikeTeam)) {
  console.log(
    `Mike's team scores more than John's team as their average score is ${average(
      mikeTeam
    )}`
  );
} else {
  console.log("The game is drow.");
}

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

const bills = [124, 48, 268];
const totals = [];

const tipCalcurater = bill => {
  let tip = 0;
  switch (bill) {
    case bill < 50:
      tip = bill * 0.2;
      break;
    case bill >= 50 && bill <= 200:
      tip = bill * 0.15;
      break;
    default:
      tip = bill * 0.1;
  }
  return tip;
};

const tips = bills.map(bill => tipCalcurater(bill));
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}

console.log(tips, totals);

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Something",
  mass: 60,
  height: 1.7,
  calcurateBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: "John Something",
  mass: 90,
  height: 1.8,
  calcurateBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// 3
if (mark.calcurateBMI() > john.calcurateBMI()) {
  console.log(`${mark.fullName} has higher BMI(${mark.bmi}) than John.`);
} else if (mark.bmi < john.bmi) {
  console.log(`${john.fullName} has higher BMI(${john.bmi}) than John.`);
} else {
  console.log(`The both has same BMI(${mark.bmi})`);
}

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
