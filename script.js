console.log ("loading JavaScript...");

function newLine() {
    console.log("\n**************************************************\n");
}

function sadLine(num) {
    for (let i = 0; i < num; i++) {
        console.log("\n☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹ ☹");
    }
    
}

/* Always Hungry */
newLine();
console.log("loading always hungry challenge...\n");

function alwaysHungry(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log(`arr${[i]} is: ${arr[i]}. Yummy!\n`);
        } else if (arr[i] != "food" && arr[i] == (arr.length -1)) {
            console.log("Dang! I'm hungry! ☹");
        }
    }
}

array1 = [3.14, "food", "pie", true, "food"]
array2 = [4, 1, 5, 7, 2];

alwaysHungry(array1);
console.log("array1 has been processed\n");
alwaysHungry(array2);
console.log("array2 has been processed\n");

console.log("exiting always hungry challenge\n");
newLine();

/* High Pass Filter */
newLine();
console.log("loading high pass filter challenge...");
// use arr.splice(i, 1) to remove only that item from array
// use indexOf(i) to look at each index. 

function highPass(arr, cutoff) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < cutoff) {
            arr.splice(arr[i], 1);
        } else {
            filteredArr.push(arr[i]);
            console.log(`${arr[i]} pushed into filteredArr`);
        }
    }
    return filteredArr;
}

let numArray = [6, 8, 3, 10, -2, 5, 9 ];
let filteredArr = [];

console.log(`\n original array value ${numArray}\n`);

highPass(numArray, 5);

console.log(`\nfiltered array value ${filteredArr}\n`);

console.log("exiting high pass challenge...\n");
newLine();

/* Better than Average */
newLine();
console.log("loading better than average challenge...\n");

function betterThanAverage(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`the sum is: ${sum}`);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sum / arr.length){
            count++;
        }
    }
    console.log(`the average is: ${sum/arr.length}`);
    console.log(`the count is: ${count}`);
    return count;
}

let averageArray = [6, 8, 3, 10, -2, 5, 9];

betterThanAverage(averageArray);
console.log("\nexiting better than average challenge...\n");
newLine();

/* Array Reverse */
newLine();
console.log("loading array reverse challenge...\n");

function reverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
        console.log(`pushing ${arr[i]} into reversed array...`);
    }
    return reversedArray;
}

let normalArray = ["a", "b","c","d","e"];
console.log(`\nnormal array is: ${normalArray}\n`);
let reversedArray = [];

reverse(normalArray);
console.log(`\nreversed array is: ${reversedArray}\n`);
console.log("exiting reverse challenge...");
newLine();

/* Fibonacci memeos */
newLine();
console.log("loading the f i b o n a c c i MeMeS...\n");
// busted, no good, janky code. 0 fibonacci memeos/10
// function fibonacciArray(n) {
//     let storedNum = 0;
//     let fibArr = [0, 1 ];
//     for (let i = 0; i < n; i++) {
//         previousNum = i ;
//         let nextNum = storedNum + i;
//         fibArr.push(nextNum);
//         console.log(`fibArr[${i}] = ${nextNum}`);
//         console.log(`previousNum is ${previousNum}`);
//         console.log(`previousNum is ${storedNum}`);
//         return storedNum;
//     }
//     return fibArr;
// }

let fibArr;

function fibonacciArray(n) {
    let fibArr = [0, 1 ];
    for (let i = 1; i < n; i++) {
        let nextIndex = fibArr[i - 1]  + fibArr[i];
        console.log(`${fibArr[i - 1]} + ${fibArr[i]} is ${nextIndex}`)
        fibArr.push(nextIndex);
    }
    printArray(fibArr);
    return fibArr;
}

function printArray(arr) {
    console.log("\nprinting array contents...\n");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

fibonacciArray(10);
console.log("\nending the the f i b o n a c c i MeMeS...");
sadLine(5);



