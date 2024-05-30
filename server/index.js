import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from './routes/posts.js';
import {signup,login} from "./controllers/Auth.js"
const app = express();
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded());

app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use('/posts',PostRoutes);
app.post('/signup',signup);
app.post('/login',login);

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;
await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
.then(()=> app.listen(PORT,()=>console.log('server running on ',PORT)))
.catch((error)=>console.log(error.message));

