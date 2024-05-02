import { config } from 'dotenv'
import { Mongo } from './database/mongo.js'
import AmqpClient from './amqp/client.js'

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

    const amqpClient = new AmqpClient(process.env.AMQP_CS)
    const amqpConnection = await amqpClient.connect()
    
    const queueName = 'Parameters'
    await amqpConnection.assertQueue(queueName)
    await amqpConnection.bindQueue(queueName, 'amq.direct')

    await amqpConnection.consume(queueName, (msg) => {
        if (msg !== null) {
            console.log(msg.content.toString())
            amqpConnection.ack(msg)
        }
    })


}

main()