const User = require('../models/user.model');
const {setUser} = require('../util/auth');



async function handleUserSignup(req, res){
    const {name, email, password} = req.body;
    await User.create({name, email, password});

    return res.render("login", {message: "User created successfully. Please login to continue"});
}

async function handleUserLogin(req, res){
    const { email, password} = req.body;
    const user = await User.findOne({email, password});
    if(!user){
        return res.render("login", {error: "Invalid email or password"});
    }
    const token = setUser(user);
    res.cookie("uid", token, { httpOnly: true,  sameSite: "strict", 
        secure: false, });
    return res.redirect("/");
    
}

module.exports = {
    handleUserSignup,
    handleUserLogin
};