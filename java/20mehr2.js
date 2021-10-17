const numbers = [2, 2, 2, 4, 4, 5, 5, 5, 5, 7, 7, 8, 9, 9, 9, 9]

const repeats = numbers.reduce((acc, item) => {
    if (! (item in acc)) {
        acc[item] = 0
    }
    acc[item]++
    return acc
}, {})
console.log(repeats)