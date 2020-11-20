const express = require('express')
const app = express();
const port = 5000
const {auth} = require('./middleware/auth')
const mongoose = require('mongoose')
const {User} = require('./models/User')
const config = require('./config/key')
const cookiesParser = require('cookie-parser')

mongoose.connect(config.mongoURI,
    {  
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
        useCreateIndex:true, 
        useFindAndModify:false
    }).then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err))


app.use(express.json())
app.use(cookiesParser())


app.post('/api/users/register', (req,res) => {
    const user = new User(req.body)
    user.save((err,doc) => {
        if(err) return res.send({success:false,err})
        return res.status(200).send({success:true})
    })
})

app.post('/api/users/login', (req,res) => {
    User.findOne({ email:req.body.email }, (err,user) => {
        if(!user){
            return res.json({success:false,message:"Email not found"})
        } 
        // comparePassword methods from User model (plainPassword / cb )
        user.comparePassword(req.body.password, (err,isMatch) => {
            if(!isMatch) 
                return res.json({success:false,message:"Wrong password"})
        // generateToken methos from User model     
        user.generateToken((err,user) => {
            if(err) return res.status(400).send(err)
            res.cookie("x_auth",user.token)  // name, token information (in cookie)
            .status(200)
            .json({loginSuccess:true,userId:user._id})
            })
        })
    })
})



// role = 0 (normal user)
// otherwise admin 

app.post('/api/users/auth', auth ,(req,res) => {
    // auth is middleware
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false :true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/api/users/logout', auth, (req,res) => {
    User.findOneAndUpdate( {_id:req.user._id},{token:""}, (err,user) => {
        if(err) return res.json({success:false,err})
        return res.status(200).send({success:true})
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
