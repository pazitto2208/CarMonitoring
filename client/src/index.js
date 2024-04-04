import CarParameters from "./models/carParameters.js"
import tyresPressure from "./sensors/tyresPressure.js"
import speed from './sensors/speed.js'
import SensorDataSender from "./sensorDataSender/sensorDataSender.js"

async function main() {
    while (true) {

        const carParameters = new CarParameters(
            speed(), 
            tyresPressure()
        )

        // console.log({carId: '660e842d951281f01eaca682', ...carParameters})

        const sensorDataSender = new SensorDataSender({ carId: '660e842d951281f01eaca682', ...carParameters })
        try {
            const result = await sensorDataSender.http()
            console.log(result)
        } catch (error) {
            console.log(error)
        }

        await new Promise(resolve => setTimeout(resolve, 3000))
    }
}

main()
