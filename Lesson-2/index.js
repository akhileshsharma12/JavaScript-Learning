
let message = "OTP send successfully || you willl receive otp in 5s"
function genrateOtp () {
    let digit = '1234567890';
    let otp = '';

    for(let i = 0; i < 5; i ++) {
        otp = otp + digit[Math.floor(Math.random() * 10)];
    }

    return otp;
}

console.log(message);

setTimeout(function () {
    console.log('Your OTP is : ', genrateOtp());
}, 3000);





