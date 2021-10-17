// const arr0 = [0, 1, 2]
// const arr1 = [3, 4, 5]
// const arr2 = [...arr1, 'a', 'b', ...arr0]
// const joinresult = arr2.join('-')
// const newArr = joinresult.split( '-')
// console.log(joinresult)
// console.log(typeof joinresult)

// const names = ['mohammad', 'ali', 'vahid', 'arash']
// names.sort();
// console.log(names)

// const arr = [32, 16, 4, 25, 54];
// arr.sort(function (a, b){
//     if (a>b){
//         return 1
//     }
//     if (b>a){
//         return -1
//     }
//     return 0
// })
// console.log(arr)

// const arr = [32, 16, 4, 25, 54];
// arr.sort((a,b) => {a-b
// })
// console.log(arr)

// const students = [
//     {name: 'ali', average: 19.3, id: 5},
//     {name: 'vahid', average: 17.3, id: 3},
//     {name: 'reza', average: 18.3, id:9},
//     {name: 'hami', average: 16.6, id:6},
// ]
// students.sort((a,b) => ((b.average+b.id) - (a.average+a.id)))
// console.log(students)

// const arr = [-5, 3, -1, -7]
// const allsPositive = arr.every(item => {
//     console.log(item)
//     return item > 0
// })

// const arr = [-5, 3, -1, -7]
// const allsPositive = arr.some(item => {
//     console.log(item)
//     return item>0
// })

// const arr5 = [-5, 3, -1, 7]
// const filteredList = arr5.filter(value => value > 0)
// console.log(filteredList)

// const arr6 = [-5, -3, -1, -7]
// const items = arr6.map(item => {
//     let obj = { key: item}
//     return obj
// })
// console.log(items)

// const arr7 = [-5, 0, 6, 1, -3, -1, -7]
// const items = arr7
//     .filter(n => n > 0)
//     .map(n => ({value: n}))
//     .filter(obj => obj.value => 1)
// console.log(items)

// function reduce(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//         current = combine(current, element);
//     }
//     return current;
// }
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// function calc(prevVal, currentVal){
//     console.log(prevVal, currentVal)
//     return prevVal + currentVal
// }
// const arr9 = [5, 7, 3, 9]
// const reduceResult = arr9.reduce(calc, 0)
// console.log(reduceResult)

let numbers = [5, 1, 7, 8, 4, -2, -5, -1];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
console.log([Math.max(...numbers), Math.min(...numbers)])

// let numbers = [5, 1, 7, 8, 8, 7, 1, 1, 4, -2, -5, -1];
// console.log(Math.(...numbers));
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers), Math.min(...numbers))
