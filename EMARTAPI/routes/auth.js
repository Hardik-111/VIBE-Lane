const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt( req.body.password,process.env.PASS_SECRET).toString(),
    // password:req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username});
        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt( user.password, process.env.PASS_SECRET);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign({
            id: user._id,isAdmin: user.isAdmin,},
            process.env.JWT_SECRET,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken}); 
    }catch(err){
        res.status(500).json(err);
    }

});

// LOGOUT

router.post('/logout', (req, res) => {
  try {
    // Clear the access token from client-side storage
    localStorage.removeItem('accessToken');

    // Send a success response
    res.status(200).json('Logged out successfully.');
  } catch (err) {
    // Send an error response if something went wrong
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
