// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  for (let person of employees) {
    console.log('person:', person);
  }

  // return new object with bonus results

}
calculateIndividualEmployeeBonus(employees);

function employeeModifier(employee) {
  let bonus = 0;
  let totalComp = 0;
  console.log(employee.employeeNumber)
  console.log('employee:', employee);

 

  //checking for bonus based on rating
  if (employee.reviewRating <= 2) {
    console.log('No bonus', employee.reviewRating);
    bonus = 0;
  }
  if (employee.reviewRating === 3) {
    console.log('4% bonus', employee.reviewRating)
    bonus = 4;
  }
  if (employee.reviewRating === 4) {
    console.log('6% bonus', employee.reviewRating)
    bonus = 6;
  }
  if (employee.reviewRating === 5) {
    console.log('10% bonus', employee.reviewRating)
    bonus = 10;
  }
  if (employee.employeeNumber.toString().length === 4) {
    bonus += 5;
    console.log('plus 5%', bonus);
  }
  if (employee.annualSalary > 65000) {
    bonus -= 1;
    console.log('salary over 65000', employee.annualSalary);
    console.log('new bonus', bonus);
  }
  if (bonus > 13 || bonus < 0) {
    console.log('bonus out of range');
  }
  let finalBonus = bonus * employee.annualSalary;
  totalComp = ((bonus / 100) * employee.annualSalary) + employee.annualSalary;
  console.log('bonus', bonus);
  console.log('annual salary', employee.annualSalary);
  console.log(totalComp);
  
  let finalCalculation = {
    name: employee.name,
    bonusPercentage: bonus,
    totalCompensation: totalComp,
    totalBonus: finalBonus

  }
  console.log(finalCalculation.totalCompensation);
  console.log(finalCalculation);
}


employeeModifier(employees[0]);