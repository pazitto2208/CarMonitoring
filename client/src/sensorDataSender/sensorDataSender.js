export default class SensorDataSender {
    constructor(sensorData) {
        this.sensorData=sensorData
    }

    async http () {
        const response = await fetch('http://localhost:3000/parameters', {
            method: "POST", 
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.sensorData),
        })
          
        console.log(response)
        return response.json()
    }

    async mqtt() {

    }
}