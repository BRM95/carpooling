import Register from '../models/register';
import moment from 'moment';

export const index = (req, res, next) => {
  // Find all movies and return json response
  Register.find().lean().exec((err, registers) => res.json(
    // Iterate through each movie
    { registers: registers.map(register => ({register}))}
  ));
};
