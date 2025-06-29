
let yourOtp = function () {
    let digits = '0123456789';
    let otp = '';
    let otpLength = 6;

    for(let i = 0; i < otpLength; i ++) {
        otp += digits[Math.floor(Math.random() * 10) ]
    }

    return otp;
}

console.log("Your OTP is: " + yourOtp());

// This is the otp generator program. 


  