

// function login (username,password) {
    
//     return new Promise((resolve,reject) => {
//         if(username == 'Akhilesh' && password == '8899') {
//             resolve(username);
//         }
//         else {
//             reject("Password or Username couldn't matched");
//         }
//     })
// }

// async function getData() {
//     try {
//         const response = await login('Akhilsh','8899');
//         console.log("You logged in ", response);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// getData();


// function login(username,password) {
//     return new Promise((resolve,reject) => {
//         if(username == 'Akhilesh' && password == '1234') {
//             resolve(username);
//         }
//         else {
//             reject("Your entered something wrong");
//         }
//     }) 
// }


// async function getData(){
//     try {
//         const verify = await login('Akhilesh','1234');
//         console.log("You logged in ", verify);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// getData();

let students = [
    {
        name: 'Akhilesh',email: 'akhileshsh421@gmail.com',contact: 8830947118, roll_no: 'BCA A 207'
    },
    {
        name: 'Akash',email: 'akashPawar2311@gmail.com',contact: 7775891815, roll_no: 'BCA A 205'
    },
    {
        name: 'Sanket',email: 'gawandeSanket77000@gmail.com',contact: 8888959837, roll_no: 'BCA A 231'
    },
    {
        name: 'Ashnish',email: 'ashnish4425234@gmail.com',contact: 9588441716, roll_no: 'BCA A 230'
    },
    {
        name: "Rahulkumar",email: 'kumarRahul0099@gmail.com',contact: 9995891815, roll_no: 'BCA A 333'
    }
];

console.log(students[0].name = 'JavaScript');
console.log(students[0].email = 'ecmaAssocication1212#gmail.com');

console.table(students);
