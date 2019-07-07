const express = require('express');
const usersRouter = express.Router();
const User = require('../../models/Users')


usersRouter.post('/', async (req, res) => {
   //Destructure the data coming from the req body

   
   const {name, email, password} = req.body;

   //Check if the email is already registered
   try {
       let user = await User.findOne({email: email});
       if(user) {
        return res.status(400).json({errors: [{msg: 'User already exist'}]})
       }
        //If the email is not created the we create the user
        user = new User({name, email, password})

        //Save the user
        await user.save()

 
       return  res.json(user)
   } catch (error) {
    res.json({
     error: error
    })
   }

})

module.exports = usersRouter;