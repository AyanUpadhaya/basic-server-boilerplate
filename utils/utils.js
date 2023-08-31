const bcrypt = require('bcrypt');
const saltRounds = 10;
//generate password hash

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});


// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});

module.exports = {}
