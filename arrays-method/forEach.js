const numbers = [1, 2, 3, 4, 5];

numbers.forEach(consoleItem);

export function consoleItem(item, index, arr) {
    console.log(item);
    console.log('a[' + index + '] = ' + item);
}

// Arrow Function
export const result = numbers.forEach((item, index, arr) => {
    console.log('a[' + index + '] = ' + item);
    console.log(arr);
});

// loop through the arrays and sum the item
export let sum = 0;
numbers.forEach(item => {
    sum += item;
})
console.log(sum);

// letters count
export const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let count = {};

letters.forEach(item => {
    if(count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});
console.log(count);