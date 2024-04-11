import mqtt from 'mqtt'

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

    // https://www.emqx.io/docs/en/latest/getting-started/getting-started.html
    mqtt() {
        return new Promise((resolve, reject) => {
            const client = mqtt.connect('mqtt://broker.emqx.io:1883', {
                clientId: `client`,
                clean: true,
                username: 'emqx',
                password: 'public',
            })

            client.on('connect', () => {
                // console.log('MQTT connected')
                client.publish(`cars/${String(this.sensorData.carId)}/parameters`, JSON.stringify(this.sensorData), (err) => {
                    if (err) {
                        reject({ success: false, result: err, text: 'Error inserting data' })  
                    } else {
                        resolve({ success: true, text: 'Parameters data published to MQTT' })  
                    }
                })
            })
        })
    }  
}