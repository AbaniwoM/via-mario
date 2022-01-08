const express = require('express')
const router = express.Router()
const registerTemplateCopy = require('../models/registerModels')
const bcrypt = require('bcrypt')
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

var jwtSecret = "viamariotoken";

router.post('/register', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const registeredUser = new registerTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })
    registeredUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

//@route GET /users/auth
//@desc Get user by token/ Loading user
//@access Private
router.get("/auth", auth, async (request, response) => {
    try{
       const user = await registerTemplateCopy.findById(request.user.id).select("-password");
       response.json(user);
    } catch (err) {
        console.error(err.message);
        response.status(500).send("Internal Server Error");
    }
});

router.post(
    "/auth", [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists(),
    ],
    async (request, response) => {
        const errors = validationResult(request);
        if(!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const { email, password } = request.body;

        try {
            //See if user exists
            let user = await registerTemplateCopy.findOne({ email });

            if(!user){
                return response.status(400)
                .json({ errors: [{ msg: "Invalid Credentials"}]});
            } 

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch) {
                return response.status(400)
                .json({ errors: [{ msg: "Invalid Credentials"}]}); 
            }
            
            //Return jsonwebtoken (jwt)
            const payload = {
                user: {
                    id: user.id,
                }
            };
            jwt.sign(payload, jwtSecret, {expiresIn: "5 days"}, (err, token) => {
                if(err) throw err;
                response.json({ token });
            });
        } catch (err) {
            console.error(err.message);
            response.status(500).send("Internal Server Error");
        }
    }
)


module.exports = router