// Methods that modify the original array (mutability).

// push()

const countries = ['USA', 'Canada', 'Mexico']
const newCountris = countries.push('Japon', 'China')

console.log(countries) // ['USA', 'Canada', 'Mexico', 'Japon', 'China']

// pop()

const removedCountry = countries.pop()

console.log(countries)
console.log(removedCountry) // 'China'