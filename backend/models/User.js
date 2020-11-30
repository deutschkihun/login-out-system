const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')  // https://www.npmjs.com/package/bcrypt
const saltRounds = 10;


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },

    lastname: {
        type: String,
        maxlength: 50
    },
    
    email: {
        type: String,
        trim : true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 
        // 0 = normal user
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// this = userSchema 

userSchema.pre('save',function( next ){
    var user = this;
    if(user.isModified('password')) {
        // password encryption 
        bcrypt.genSalt(saltRounds,function(err,salt) {
            if(err) return next(err)
            bcrypt.hash(user.password,salt,function(err,hash)  {
                if(err) return next(err)
                user.password = hash
                next();
            }) 
        })       
    }else{
        next();
    }
})

userSchema.methods.comparePassword = function(plainPassword,cb) {
    bcrypt.compare(plainPassword,this.password, function(err,isMatch){
        if(err) return cb(err)
        cb(null,isMatch)
    })
}



// https://www.npmjs.com/package/jsonwebtoken

userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toJSON(),'secretToken')
    // token = user._id.toJSON() + 'secretToken' 
    user.token = token 
    user.save(function(err,user){
        if(err) return cb(err)
        cb(null,user)
    })
}

userSchema.statics.findByToken = function(token,cb) {
    var user = this;    
    jwt.verify(token,'secretToken' ,function(err,decoded){
        user.findOne({"_id":decoded, "token":token}, function(err,user){
            if (err) return cb(err)
            return cb(null,user)
        })
    })
}


const User = mongoose.model('User',userSchema)
module.exports = {User};
