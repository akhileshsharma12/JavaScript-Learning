let isQualified = true;

try {
    if(!isQualified) {
        console.log('Congratulations! You are qualified.');
    }
    else {
        console.log('Sorry! You are not qualified.');
    }
}
catch(error) {
    console.log('Error :', error);
}