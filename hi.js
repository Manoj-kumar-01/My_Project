let str1 = "manoj";
let str2 = "manojya";
let arr1 = str1.split('');
let arr2 = str2.split('');

// Remove duplicates from arr1
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            arr1.splice(i, 1);
            i--;
            arr2.splice(j,1);
        }
    }
}

let result1 = arr1.join('');
let result2 = arr2.join('');


