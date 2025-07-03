import express, { response } from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import { userPost } from "./models/postModel.js";
import postRoute from './routes/postRoutes.js';
import cors from 'cors';
const app = express();

app.use(express.json())
app.use(cors())
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Starting')
})

app.use('/post', postRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Successful connection to database")
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch(() => {
        console.log(error)
    })