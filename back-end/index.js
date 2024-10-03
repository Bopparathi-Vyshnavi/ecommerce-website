import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";

import userRoute from "./routes/users.js";
import contactRoute from "./routes/contact.js";
import accountRoute from "./routes/users.js";
import productRoute from './routes/products.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded ({limit: "30mb", extended: true}))

app.get('/api',(req,res) => {
    res.send("This is a FurryandCo Page")
})

app.use('/api/user', userRoute);
app.use('/api/contact', contactRoute);
app.use('/api/account', accountRoute);
app.use('/api/product', productRoute);



const PORT = process.env.PORT || 8080;
const DATABASE_URL = process.env.CONNECTION_URL;

mongoose.set('strictQuery', true)
mongoose.connect (DATABASE_URL)
    .then(() => { console.log("Database connected successfully") })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message));

