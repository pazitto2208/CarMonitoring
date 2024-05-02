import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { Mongo } from './database/mongo.js'
import parametersRouter from './routes/parameters.js'
import carsRouter from './routes/cars.js'
import MqttClient from './mqtt/client.js'
import ParametersController from './controllers/parameters.js'

config()

async function main() {

    const hostname = 'localhost'
    const port = 3000

    const mongoConnection = await Mongo.connect({ mongoConnectionString: process.env.MONGO_CS, mongoDbName: process.env.MONGO_DB_NAME })
    // const mongoConnection = await Mongo.connect({ mongoConnectionString: process.env.MONGO_ATLAS_CS, mongoDbName: process.env.MONGO_DB_NAME })
    console.log(mongoConnection)

    const app = express()

    app.use(express.json())
    app.use(cors())
    
    app.get('/', (req, res) => {
        res.send(`
            <h1>Welcome to Car Monitoring!</h1>
            <p>Try <a href="/cars">/cars</a> to see cars list.</p>
            <p>Try <a href="/parameters">/parameters</a> to see cars sensors parameters data.</p>
        `)
    })

    // routes
    app.use('/parameters', parametersRouter)
    app.use('/cars', carsRouter)
    
    // mqtt 

    const mqttClient = (new MqttClient('cars/#')).client

    mqttClient.on('message', async (topic, message) => {
        const parametersController = new ParametersController()
        // console.log(JSON.parse(message.toString()))
         const { body, statusCode, success } = await parametersController.addParameters(JSON.parse(message.toString()))
         console.log({ body, statusCode, success })
    })

    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()