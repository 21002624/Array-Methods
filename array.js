
const names = ['John', 'Jane', 'Bob'];

names.forEach(name => {
    console.log(name);
});


const departments = ['IT Department', 'ECE Department', 'HR Department'];

const modifiedDepartments = departments.map(department => {
    return department + ' - Saveetha';
});

console.log(modifiedDepartments);


const ages = [20, 16, 25, 14, 30];

const adults = ages.filter(age => age > 18);

console.log(adults);

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


const allAdults = ages.every(age => age > 18);

console.log('Are all adults?', allAdults);


// Example using some to check if at least one person is older than 18
const atLeastOneAdult = ages.some(age => age > 18);

console.log('Is there at least one adult?', atLeastOneAdult);
