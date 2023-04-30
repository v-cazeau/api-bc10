import functions from 'firebase-functions'; 
import express from 'express'; 
import cors from 'cors'; 
import {  addCar, getAllCars } from './src/cars.js'; 

const app = express()
app.use(cors())
app.use(express.json())

app.get('/cars', getAllCars); 
app.post('/cars', addCar); 

export const api = functions.https.onRequest(app)