import CarParameters from "./models/carParameters.js"
import tyresPressure from "./sensors/tyresPressure.js"
import speed from './sensors/speed.js'
import SensorDataSender from "./sensorDataSender/sensorDataSender.js"
import amqp from 'amqplib'

async function main() {
    const amqpConnection = await amqp.connect('amqps://rxlphtod:3QTOe42jj4nZdKVB3eDrYA39rR7O4oTv@crow.rmq.cloudamqp.com/rxlphtod')
    const amqpClient = await amqpConnection.createChannel()
    
    while (true) {

        const carParameters = new CarParameters(
            speed(), 
            tyresPressure()
        )

        const sensorDataSender = new SensorDataSender({ carId: '660e842d951281f01eaca682', ...carParameters })
        
        try {
            const result = await sensorDataSender.amqp(amqpClient)
            console.log(result)
        } catch (error) {
            console.log(error)
        }

        await new Promise(resolve => setTimeout(resolve, 5000))
    }
}

main()
