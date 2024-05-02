import CarParameters from "./models/carParameters.js"
import tyresPressure from "./sensors/tyresPressure.js"
import speed from './sensors/speed.js'
import SensorDataSender from "./sensorDataSender/sensorDataSender.js"
import { connect } from 'mqtt'

async function main() {
    const client = connect('mqtt://test.mosquitto.org', {
        clientId: `pazitto_client`,
    })

    client.on('connect', () => {
        console.log('MQTT connected')
    })

    while (true) {

        const carParameters = new CarParameters(
            speed(), 
            tyresPressure()
        )

        const sensorDataSender = new SensorDataSender({ 
            carId: '660e842d951281f01eaca682', 
            ...carParameters }
        )
        
        try {
            const result = await sensorDataSender.mqtt(client)
            console.log(result)
        } catch (error) {
            console.log(error)
        }

        await new Promise(resolve => setTimeout(resolve, 5000))
    }
}

main()
