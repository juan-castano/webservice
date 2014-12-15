var Schema = require('mongoose').Schema;


var UserModel = { nombre: String, email: String };

var UserSchema = Schema(UserModel);

var User = module.exports = UserSchema;

