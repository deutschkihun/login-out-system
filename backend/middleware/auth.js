const {User} = require('../models/User')
let auth = (req,res,next) => {
    // authentication process

    // get token from cookie
    let token = req.cookies.x_auth;

    // decode token and find user 
    User.findByToken(token,(err,user) => {
        if(err) throw err;
        if(!user) return res.json({isAuth:false,error:true})
        
        req.token = token;
        req.user = user;
        next();
        // next 없으면 middleware 가 index.js 에서 '/auth' 으로 넘어가지 않음
        // 이 안에 갇혀버림 
    })

    // if user is there -> authentication ok
    // if not -> authentication no


}

module.exports = {auth};