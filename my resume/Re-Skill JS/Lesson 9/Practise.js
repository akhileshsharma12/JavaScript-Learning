
// Recersed String by using Function 
// function reverseString(str) {
//     return str.split('').reverse();
// }

//console.log(reverseString("Akhilesh"));     // Output is ['h', 's', 'e','l', 'i', 'h','k', 'A']

// function reverseString2(str2) {
//     return str2.split('').reverse().join('')
//}

//console.log(reverseString2("Akhilesh"));     // Output is hselihkA

// let arr = "Akhilesh";
// let reversed = arr.split('').reverse().join('');

//console.log(reversed)       //Output is hselihkA 


// function reverseStr(str) {
//     let reversed = '';

//     for(let i = str.length - 1; i >= 0; i --) {
//         reversed = reversed + str[i];
//     }

//     console.log(reversed);
// }

//reverseStr("ABCDEF");

// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(isPalindrome("lolo"));

// function vowelsCount (str) {
//     let vowels = "aeiouAEIOU";
//     let count = 0;

//     for(let char of str) {
//         if(vowels.includes(char)) {
//             count ++;
//         }
//     }

//     return count;
// }

// console.log(vowelsCount("Sakshi"));


// function countVowels(str) {
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     let foundVowels = [];
//     let odinary = [];

//     for(let i = 0; i <= str.length; i ++) {
//         if(vowels.includes(str[i])) {
//             count ++;
//             foundVowels.push(str[i]);
//         }
//         else {
//             odinary.push(str[i]);
//         }
//     }

//     console.log(` Count   =  ${count}`);
//     console.log(` Vowels  =  ${foundVowels.join()}`);
//     console.log(` Odinary =  ${odinary.join()}`);

// }

// countVowels("Akhilesh");

// function findLongWord(str) {
//     let words = str.split(' ');
//     let count = 0;
//     let longWord = "";

//     for(let i = 0; i < words.length; i ++) {
//         if(words[i].length > count) {
//             count = words[i].length;
//             longWord = words[i];
//         }
//     }

//     console.log(longWord);
//     return count;

// }

// console.log(findLongWord(" i am bad boy name is akhilesh"));

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    let foundVowels = [];
    let odinary = [];

    for(let i = 0; i <= str.length; i ++) {
        if(vowels.includes(str[i])) {
            count ++;
            foundVowels.push(str[i]);
        }
        else {
            odinary.push(str[i]);
        }
    }

    console.log(`Count   = ${count}`);
    console.log(`Vowels  = ${vowels}`);
    console.log(`Odinary = ${odinary}`);

}

// countVowels("aeiou");


function findLongestWord(text) {
    let words = text.split(' ');
    let longest = 0;
    let targetWord = "";

    for(let word of words) {
        if(word.length > longest) {
            longest = word.length;
            targetWord = word;
        }
    }

    console.log(longest);
    console.log(targetWord);

}

findLongestWord("I am bad boy ever");





