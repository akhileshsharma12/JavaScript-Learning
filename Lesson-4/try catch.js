try {
    let student = {
        name: 'Akhilesh',
        age: 22,
        role: 'student'
    }

    let statusCode = 200;

    if(statusCode === 200) {
        console.log("Data fetched successfully :", student);
    }
    else {
        throw new Error('Error: while fetching data');
    }
}
catch (error) {
    console.log(error);
}

// added little of promise 