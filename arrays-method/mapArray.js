export const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(double);

function double(value, index, arr) {
    return value * 2;
}
console.log(numbersDouble);

const numbersMultiply = numbers.map(multiply);

function multiply(value, index, arr) {
    return value * index;
}
console.log(numbersMultiply);

// map through the students arrays and return students names
const Students = [
    {
        name: "Jason",
        age: 17,
        gender: "male",
    },

    {
        name: "Andrew",
        age: 18,
        gender: "male",
    },

    {
        name: "Emily",
        age: 19,
        gender: "female",
    },

    {
        name: "Sweety",
        age: 20,
        gender: "female",
    }
];

export const StudentArrays = Students.map((Student) => Student.name);
console.log(StudentArrays);

const products = [
    {
        name: "laptop",
        price: 1000,
        count: 5,
    },

    {
        name: "desktop",
        price: 1500,
        count: 2,
    },

    {
        name: "phone",
        price: 500,
        count: 10,
    }
];

export const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
}));
console.log(totalProductsValue);

const str = ['1', '2', '3', '4'];

export const Numbers = str.map(Number);
console.log(Numbers);