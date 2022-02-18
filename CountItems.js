//count the number of occurances of the items in an array
const numbers = [3, 3, 4, 5, 4, 5, 6, 7, 8, 2, 3]

//function to count the occurances
const count = (array, item) => {
    let counter = 0
    //if the element is the same as the item then increase the counter
    array.forEach(element => {
        if(element === item) counter++
    });
    return counter
}



//get rid of duplicates
    
    //By using SET
    //Set only allows to store unique values. used in ES6
    //Create new set by passing the array
    //then turn the set into an array

const noDuplicatesSet = new Set(numbers)
const uniqueNumbersArray = [...noDuplicatesSet]
console.log(uniqueNumbersArray)

        //One liner SET:
        const uniqueArray = Array.from(new Set(numbers))
        console.log(uniqueArray)

    //By using .indexOf() and .filter()
const noDuplicatesArray = numbers.filter((item, index) => numbers.indexOf(item) === index)
console.log(noDuplicatesArray)

const howManyTimes = []

for (let i = 0; i < noDuplicatesArray.length; i++){
    howManyTimes.push(count(numbers, noDuplicatesArray[i]))
}

const hashMap = new Map()
for (let i = 0; i < noDuplicatesArray.length; i++){
    hashMap.set(noDuplicatesArray[i], howManyTimes[i])
}

console.log(hashMap)
