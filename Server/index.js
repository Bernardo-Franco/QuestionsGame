import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import cardRouter from './routes/cards.js';
import userRouter from "./routes/users.js";

const app = express();

app.use(express.json({extended: "true" }))
app.use(express.urlencoded({extended: "true" }))
app.use(cors());

app.use('/cards', cardRouter);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://rokrag:rokrag123@cluster0.djxge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  mongoose.set('useFindAndModify', false);