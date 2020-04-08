const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  isSnack: { type: Boolean, required: false }, 
  
}, {
  timestamps: true,
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;