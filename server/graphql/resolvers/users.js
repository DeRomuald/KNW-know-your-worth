const User = require('../../models/User');
const {AppoloError} = require ('apollo-server-errors')
const jwt = require ("jsonwebtoken");
const bcrypt = require ("bcryptjs");
module.exports = {
    Mutation: {
        async registerUser(_, {registerInput: {username, email, password} }) {
            // See if an old user exists with email attempting to register
            const oldUser = await User.findOne({ email });
            // Throw err is that user exists
            if (oldUser) {
                throw new AppoloError ('A user is already registered with the email' + email, 'USER_ALREADY_EXISTS');
            }
            // Encrypt Password
            var encryptedPassword = await bcrypt.hash(password, 10);
            // Build out mongoose model
            const newUser = new User ({
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
            });
            // Create JWT (attach to our User model)
            const token = jwt.sign (
                {user_id: newUser._id, email},
                "UNSAFE_STRING",
                {
                    expiresIn: "2h"
                }
            );

            newUser.token = token;
            // Save our user in MongoDB
                const res = await newUser.save();

                return {
                    id: res.id,
                    ...res._doc
                };

            },
            async loginUser(_, {loginInput: {email, password} }) {
                // See if user exisists with email
                const user = await User.findOne({ email });
                //Check if entered password equals encrypted password
                if (user && (await bcrypt.compare (password, user.password))) {
                //Create a NEW token
                const token = jwt.sign (
                    {user_id: newUser._id, email},
                    "UNSAFE_STRING",
                    {
                        expiresIn: "2h"
                    }

                );
                  
                //Attach token to user model found above
                 user.token = token;
                 
                 return {
                    id: user.id,
                    ...user._doc
                 }
                } else {
                    //if user doesnt exist, return error
                    throw new AppoloError('Incorrect password','INCORRECT_PASSWORD' );
                }
                
            }
    },
    Query: {
        user: (_, {ID}) => User.findById(ID)
    }
}