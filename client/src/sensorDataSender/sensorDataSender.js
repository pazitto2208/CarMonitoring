export default class SensorDataSender {
    constructor(sensorData) {
        this.sensorData=sensorData
    }

    async http () {
        const response = await fetch('http://localhost:3000/parameters', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.sensorData),
        })
          
        return response.json()
    }

    async mqtt() {

    }
}