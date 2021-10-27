const mongoose  = require("mongoose"); 
const Schema  = require("mongoose"); 
// var autoIncrement = require('mongoose-auto-increment'); 

const UserSchema = new mongoose.Schema(
  {
    //name: { type: String, required: true },
    //user_id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
    rol: {
      type: String,
      enum: ['Administrador', 'Vendedor', 'Usuario'],
      default: 'Usuario'
  },

    img: { type: String },
    idToken: { type: String },
  },
  { timestamps: true }
);

// autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement 

// UserSchema.plugin(autoIncrement.plugin, 'user'); // 4. use autoIncrement


module.exports = mongoose.model("User", UserSchema);
