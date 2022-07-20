import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://ricardobelfort:NED2He6F04S0u1gq@belfort.84w3j.mongodb.net/carwash'
);

let db = mongoose.connection;

export default db;
