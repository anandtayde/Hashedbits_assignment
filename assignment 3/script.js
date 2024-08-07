// Q1: Remove states starting with vowels
const states = ['Andhra Pradesh', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
const filteredStates = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state.charAt(0)));
console.log('Filtered States:', filteredStates);

// Q2: Reverse words in a string
let str = 'I love my India';
let reversed = str.split(' ').reverse().join(' ');
console.log('Reversed String:', reversed);

// Q3: Replace 'INDIA' with 'INDONESIA' using splice
let string = 'INDIA';
let arr = string.split('');
arr.splice(0, 5, 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A');
let newString = arr.join('');
console.log('Replaced String:', newString);

// Q4: Count number of consonants and vowels in a string
function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }
    return { vowels: vowelCount, consonants: consonantCount };
}

let exampleStr = 'This is a sample string with more than twenty characters';
console.log('Vowel and Consonant Count:', countVowelsAndConsonants(exampleStr));

// Q5: Replace wrong word with correct word in a sentence
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

let sentence = 'I love my India';
let correctedSentence = correctfn(sentence, 'India', 'Bharat');
console.log('Corrected Sentence:', correctedSentence);

// Q6: Return numbers greater than 5
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const result = inputArr.filter(num => num > 5);
console.log('Numbers Greater Than 5:', result);

// Q7: Compute average scores for students
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const studentAverages = students.map(student => {
    const average = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
    return { name: student.name, average: Math.round(average) };
});

console.log('Student Averages:', studentAverages);

// Q8: Find repeated sum of digits until there is only a single digit
function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return num;
}

console.log('Repeated Sum of Digits:', repeatedSumOfDigits(456));

// Q9: Count number of words in a paragraph
function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}

let paragraph = 'This is a sample paragraph to count the number of words.';
console.log('Word Count:', countWords(paragraph));

// Q10: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputStr = 'Hello';
console.log('Reversed String:', reverseString(inputStr));
