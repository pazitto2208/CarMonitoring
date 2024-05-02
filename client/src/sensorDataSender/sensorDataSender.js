export default class SensorDataSender {
    constructor(sensorData) {
        this.sensorData=sensorData
    }

    http () {
        return new Promise(async (resolve, reject) => {
            try {                
                const response = await fetch('http://localhost:3000/parameters', {
                    method: "POST", 
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.sensorData),
                })
                resolve({ success: true, result: await response.json(), text: 'Data inserted correctly' })  
            } catch (error) {
                reject({ success: false, result: error, text: 'Error inserting data' })  
            }
        })
    }
}