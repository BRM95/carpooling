import mongoose, { Schema } from 'mongoose';

var registerSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  carMake: String,
  carModel: String,
  carColor: String,
  car_numberPlate: String,
});

// Export Mongoose model
export default mongoose.model('register', registerSchema);
