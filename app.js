import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoute from './routes/auth.js'
import path from 'path';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

app.use('/public', express.static(path.join('./', 'public')));
// app.use(express.static(path.join('./', 'public')));

const port = process.env.PORT || 6680;

// app.get('/games/mario/index.html', (req, res) => {
//   res.send('<h1>Welcome!</h1>');
// })

app.use('/api/auth', authRoute);



mongoose.set('strictQuery', false);

app.listen(port, () => {
  console.log('listening on port ' + port);
})
const connect = async () => {
  mongoose.connect(process.env.MONGO, {}).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.log('Irror');
    throw err;
  })
}
connect();

export default app;