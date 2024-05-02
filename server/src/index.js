import { config } from 'dotenv'
import { Mongo } from './database/mongo.js'
import MqttClient from './mqtt/client.js'
import ParametersController from './controllers/parameters.js'

config()

async function main() {

    const mongoConnection = await Mongo.connect({ 
        mongoConnectionString: process.env.MONGO_CS, 
        mongoDbName: process.env.MONGO_DB_NAME 
    })

    // const mongoConnection = await Mongo.connect({ 
    //     mongoConnectionString: process.env.MONGO_ATLAS_CS, 
    //     mongoDbName: process.env.MONGO_DB_NAME 
    // })

    const mqttClient = (new MqttClient('cars/#')).client

    mqttClient.on('message', async (topic, message) => {
        const parametersController = new ParametersController()
        const { body, statusCode, success } = await parametersController.addParameters(JSON.parse(message.toString()))
        console.log({ body, statusCode, success })
    })
}

main()