export default class SensorDataSender {
    constructor(sensorData) {
        this.sensorData=sensorData
    }

    amqp(client) {
        return new Promise((resolve, reject) => { 
            const dataToSend = JSON.stringify(this.sensorData)

            const result = client.publish('amq.direct', '', Buffer.from(dataToSend))

            if (result) {
                resolve({ success: true, text: 'Message published correctly' })
            } else {
                reject({ success: true, text: 'Message published' })
            }
        })
    }  
}