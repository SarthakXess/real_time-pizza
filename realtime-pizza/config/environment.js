module.exports={
    port:1000,
    sessionCookieSecret:"real-time-pizza-blahhhh",
    mongoDbUrl:'mongodb+srv://charmi:charmi003@beach-resort.wnheq.mongodb.net/realtime-pizza?retryWrites=true&w=majority',
    smtp:{   
        service:"gmail",
        host:"smtp.gmail.com",
        port:587,  //TLS
        secure:false,
        auth: {
            user: "RealTimePizzaa@gmail.com", // generated ethereal user
            pass: "realtimepizza123" // generated ethereal password
        }
    },
    rzp_keyId:'rzp_test_JByp9lBtJuA4NJ',
    rzp_keySecret:'BcjIapp1lnjE1XH0iBFVBBlV'
}