import CarParameters from "./models/parameters.js"
import tyresPressure from "./sensors/tyresPressure.js"
import speed from './sensors/speed.js'

async function main() {
    while (true) {

        const carParameters = new CarParameters(
            speed(), 
            tyresPressure()
        )

        console.log(carParameters)

        await new Promise(resolve => setTimeout(resolve, 3000))
    }
}

main()
