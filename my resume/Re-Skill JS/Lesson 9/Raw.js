
// Hoq to add two or more arrays in one single array
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [11,12,13,14,15];
let arr4 = [16,17,18,19,20];

let combine = arr1.concat(arr2,arr3,arr4);
//let combine = [...arr1,...arr2,...arr3,...arr4];


// How to remove dublicates from array 
let rem1 = [2,4,1,2,4,1,5,7,4,1];
let remove = [...new Set(rem1)];
//console.log(remove);

// let dublicate = [];

// rem1.forEach((item) => {
//   if(!dublicate.includes(item)) {
//     dublicate.push(item);
//   }
// })


let student = {
  name: 'Akhilesh Sharma',
  age: 21,
  role: 'Frontend Developer',
  contact: 8830947118,
  email: 'akhileshsh421@gmail.com',
  address: {
    city: 'Akola',
    state: 'Maharashtra',
    country: 'India'
  },
  skills: ['HTML','CSS','JavaScript','React','Github','Bootstrap'],
  graduation: function () {
    return 'Bachlour of Computer Application';
  }
};

let back = {name: 'Akhil'};
console.log(back);

let next = back;
console.log(next);

back.name = 'Akhilesh';

console.log(back);
console.log(next);


// console.log(student.address);
// console.log(student.skills.length);
// console.log(student.graduation())