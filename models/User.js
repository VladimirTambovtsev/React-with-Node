const mongoose = require('mongoose');
const { Schema } = mongoose; // (ES6 syntax) const Schema = mongoose.Schema;
 

// Объявляем типы в бд
const userSchema = new Schema({  
	googleId: String
});

mongoose.model('users', userSchema);