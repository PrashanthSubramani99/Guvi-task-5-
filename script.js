// Print odd numbers in an array anonymous function.

(function(arr){
    var odd_num = [];
    arr.forEach(function(num){
        if(num % 2 !== 0){
          odd_num.push(num);
        }
      });

      console.log(odd_num);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Convert all the string to title caps in a string array

(function(str){

    var string = str.toLowerCase().split(" ");

    for(let i=0; i<string.length;i++){
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
    }
    console.log(string.join(" "));
})('hello prashanth welcome to guvi..');


//Sum of all numbers in an array
(function(arr){

    var sum = 0;

    for(let i=0; i<arr.length;i++){
        sum += arr[i];
    }

    console.log(sum);

})([1,5,6,9,10,15])


// Return all the prime numbers in an array
const numbers = [2, 4, 7, 11, 13, 16, 17, 19, 20];

const primes = (function(arr) {
  const isPrime = function(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const primeArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeArr.push(arr[i]);
    }
  }
  return primeArr;
})(numbers);

console.log(primes);



// Return all the palindromes in an array
(function(arr) {
  const palindromes = arr.filter(word => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
  console.log(palindromes);
})(['racecar', 'level', 'hello', 'deed', 'civic']);


// duplicate array
(function(arr){
  const arr = arr.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });
  console.log(arr);
})(['1','2','3','4','2','5','3']);

/-----------------------------------------------------------------------------------------/
// arrow function:
var array = [];
const printOddNumbers = arr =>{
  arr.forEach(function(num){
    if (num % 2 !== 0) {
      array.push(num);
    }
  });
  console.log(array);
}

const number = ['1','2','3','4','5'];
printOddNumbers(number);

// text to caps
const textCaps = str =>{
  var string = str.toLowerCase().slipt(" ");
  for(let i=0; i<string.length;i++){
    string[i] = string[i][0].toUpperCase() + string[i].slice(1);
}
console.log(string.join(" "));
}

const string = "prashanth is a good developer";
textCaps(string);

// sum of array of all numbers
const arrayVal = arr=>{
  var sum = 0;

  for(let i=0; i<arr.length;i++){
      sum += arr[i];
  }

  console.log(sum);
}

const arrays = [1,5,6,9,10,15];
arrayVal(arrays);

// prime numbers
const num = [2, 4, 7, 11, 13, 16, 17, 19, 20];

const prime = (function(arr) {
  const isPrime = function(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const primeArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeArr.push(arr[i]);
    }
  }
  return primeArr;
})(num);

console.log(primes);


// palindrome

const palindrom = arr =>{
  const palindrome = arr.filter(word => {
    const reverse = word.split('').reverse().join('');
    return word === reverse;
  });
  console.log(palindrome);
}

const PaliValue = ['racecar', 'level', 'hello', 'deed', 'civic'];
palindrom(PaliValue);






