import express from 'express'
import ParametersDataAccess from '../dataAccess/parameters.js'
import ParametersController from '../controllers/parameters.js'

const parametersRouter = express.Router()

const parametersDataAccess = new ParametersDataAccess()
const parametersController = new ParametersController(parametersDataAccess)

parametersRouter.get('/', async (req, res) => {
    const { body, statusCode, success } = await parametersController.getParameters()

    res.status(statusCode).send({ body, statusCode, success })
})

parametersRouter.post('/', async (req, res) => {
    const { body, statusCode, success } = await parametersController.addParameters(req.body)

    res.status(statusCode).send({ body, statusCode, success })
})


parametersRouter.delete('/', async (req, res) => {
    const { body, statusCode, success } = await parametersController.clearAllParameters()

    res.status(statusCode).send({ body, statusCode, success })
})

export default parametersRouter