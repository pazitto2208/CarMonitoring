import express from 'express'
import CarsDataAccess from '../dataAccess/cars.js'
import CarsController from '../controllers/cars.js'

const carsRouter = express.Router()

const carsDataAccess = new CarsDataAccess()
const carsController = new CarsController(carsDataAccess)

carsRouter.get('/', async (req, res) => {
    const { body, statusCode, success } = await carsController.getCars()

    res.status(statusCode).send({ body, statusCode, success })
})


export default carsRouter