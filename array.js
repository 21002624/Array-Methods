
const names = ['John', 'Jane', 'Bob'];

names.forEach(name => {
    console.log(name);
});

// Example using map to add text to the end of each array element
const departments = ['IT Department', 'ECE Department', 'HR Department'];

const modifiedDepartments = departments.map(department => {
    return department + ' - Saveetha';
});

console.log(modifiedDepartments);


// Example using filter to find people older than 18
const ages = [20, 16, 25, 14, 30];

const adults = ages.filter(age => age > 18);

console.log(adults);

// Example using reduce to find the sum and average of numbers
const numbers = [10, 5, 8, 15, 7];

const sumAndAverage = numbers.reduce((accumulator, currentValue, index, array) => {
    accumulator.sum += currentValue;
    if (index === array.length - 1) {
        accumulator.avg = accumulator.sum / array.length;
    }
    return accumulator;
}, { sum: 0, avg: 0 });

console.log('Sum:', sumAndAverage.sum);
console.log('Average:', sumAndAverage.avg);


// Example using every to check if all ages are greater than 18
const allAdults = ages.every(age => age > 18);

console.log('Are all adults?', allAdults);


// Example using some to check if at least one person is older than 18
const atLeastOneAdult = ages.some(age => age > 18);

console.log('Is there at least one adult?', atLeastOneAdult);
