import { db } from './dbConnect.js'; 

const coll = db.collection('cars')

export async function addCar(req,res) {
    const newCar = req.body; 
    await coll.add(newCar)
        getAllCars(req, res)
}; 

export async function getAllCars(req, res) {
    const carList = await coll.get() 
    const carSort = carList.docs.map (
         doc => ({...doc.data(), id: doc.id})
        )
        res.status(201).send(carSort); 
}