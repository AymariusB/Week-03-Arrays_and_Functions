// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
// 1a . Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// Do not use numbers to reference the last element, find it programmatically, 
//ages[7] – ages[0] is not allowed!
let firstElement = ages[0];
console.log(firstElement);
let lastElement = ages[ages.length - 1];
console.log(lastElement);
let result = firstElement - lastElement;
console.log(result);
// 1b . Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(48);
console.log(ages);
ages.unshift(52);
console.log(ages);
firstElement = ages[0];
console.log(firstElement);
lastElement = ages[ages.length - 1];
console.log(lastElement);
result = firstElement - lastElement;
console.log(result);
// 1c.	Use a loop to iterate through the array and calculate the average age. 
let sum = 0;
for( let i = 0; i < ages.length; i++){
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(averageAge);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let total = names.reduce((a, b) => a + b);
let count = 0;
for(let i = 0; i < total.length; i++){
    count++
}
console.log(count);
let averageLetters = count / names.length;
console.log(averageLetters);
// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let sumName = 0;
for(let i = 0; i < names.length; i++){
    sumName += names[i];
}
console.log(sumName);

// 3.	How do you access the last element of any array?

// To access the last element of any array, you must subtract 1 from the length of the array. For example:
// let array = [a,b,c,d];
// Even though (d) is in forth or last position to access (d), we write:
// let lastItem = array[3];

// 4.	How do you access the first element of any array?

// To access the first element of any array, you must start the count from zero. For example:
// let array = [a,b,c,d];
// Even though (a) is in first position, to access (a), we write:
// let firstItem = array[0];


// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let namelenghts = [3, 5, 3, 5, 4, 3];
//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumLenght = 0;
for( let i = 0; i < namelenghts.length; i++){
    sumLenght += namelenghts[i];
}
console.log(sumLenght);
// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
//to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function myFunction(word, n){
 let repeater = "";
 for(let i = 0; i < n; i++){
    repeater += word;
 }
 console.log(repeater);
}
myFunction("Hello", 4);

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.

function creatFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
creatFullName("Aymar","Dossou");
// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is
// greater than 100.

function array1(sum){
if(sum > 100){
    console.log(true);
}else{
    console.log(false);
}  
}
array1(20);

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function myAverage(sumOfElements, lenghtOfArray){
    let totalCount = 0;
    for(let i = 0; i < sumOfElements.lenght; i++){
        totalCount += sumOfElements[i];
        
    }
    console.log(sumOfElements / lenghtOfArray);
}
myAverage(60, 20);

// 11.	Write a function that takes two arrays of numbers and returns true if the average of 
//the elements in the first array is greater than the average of the elements in the second array.

function greaterAverage(arrayOne, arrayTwo){
    let sumOne = 0;
    for(let i = 0; i < arrayOne.lenght; i++){
        sumOne += arrayOne[i];
        let avrOne = sumOne / arrayOne.lenght;
    }
    let sumTwo = 0;
    for(let i = 0; i < arrayTwo.lenght; i++){
        sumTwo += arrayTwo[i];
        let avrTwo = sumTwo / arrayTwo.lenght;
        if(avrOne > avrTwo){
            console.log(true);
        
        }else{
            console.log(false);
        }
    } 
 }



