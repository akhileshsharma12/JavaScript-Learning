console.log("Hello");

let promise = new Promise((resolve, reject) => {
    let student = {
        name: 'Akhilesh',
        age: 22,
        role: 'student'
    }

    let statusCode = 200;

    if(statusCode === 200) {
        resolve(student);
    }
    else {
        reject("Error: While fetching data");
    }
})

promise.then((data) => {
    console.log("Data fetched successfully:", data);
})
.catch((error) => {
    console.error(error);
})