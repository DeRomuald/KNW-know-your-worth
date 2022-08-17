const User = require('../../models/User');

module.exports = {
    Mutation: {
        async registerUser(_, {registerInput: {username, email, password} }) {
            // See if an old user exists with email attempting to register

            // Throw err is that user exists

            // Encrypt Password

            // Build out mongoose model

            // Create JWT (attach to our User model)

            // Save our user in MongoDB


            
        }
    },
    Query: {
        //message: (_, {ID}) => Message.findById(ID)
    }
}