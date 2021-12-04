const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// encrypt the password before storing
<<<<<<< HEAD
// comments make code readable
=======
// comments is compulsory
>>>>>>> f88c86a101f1a37b92ae874b674daaa2620bd8cc
userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
  console.log('password', password)
};

userSchema.methods.validPassword = function (candidatePassword) {
  if (this.password != null) {
    return bcrypt.compareSync(candidatePassword, this.password);
  } else {
    return false;
  }
};

module.exports = mongoose.model("User", userSchema);
