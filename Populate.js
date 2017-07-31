import mongoose from 'mongoose';
import register from './src/models/register';

const registers = [
  {
    username: 'N/A',
    password: 'https://i.imgur.com/po7UezG.jpg',
    carMake: 'Drama/Romance',
    carModel: 'Drama/Romance',
    carColor: 'Drama/Romance',
    car_numberPlate: 'Drama/Romance',
  },
  {
    username: 'Test',
    password: 'Random',
    carMake: 'Drama/Romance',
    carModel: 'Drama/Romance',
    carColor: 'Drama/Romance',
    car_numberPlate: 'Drama/Romance',
  },
  {
    username: 'Working?',
    password: 'Random',
    carMake: 'Drama/Romance',
    carModel: 'Drama/Romance',
    carColor: 'Drama/Romance',
    car_numberPlate: 'Drama/Romance',
  },
  {
    username: 'lol',
    password: 'Random',
    carMake: 'Drama/Romance',
    carModel: 'Drama/Romance',
    carColor: 'Drama/Romance',
    car_numberPlate: 'Drama/Romance',
  },
  {
    username: 'notanefaf',
    password: 'Random',
    carMake: 'Drama/Romance',
    carModel: 'Drama/Romance',
    carColor: 'Drama/Romance',
    car_numberPlate: 'Drama/Romance',
  },  
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/register',{ useMongoClient: true });

// Go through each movie
registers.map(data => {
  // Initialize a model with movie data
  const registerData = new register(data);
  // and save it into the database
  registerData.save();
});
