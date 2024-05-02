import { connect } from 'mqtt'

export default class MqttClient {
    constructor (mqttTopic) {
        this.client = connect('mqtt://test.mosquitto.org', {
            clientId: `pazitto_server`,
        })

        this.client.on('connect', () => { 
            this.client.subscribe(mqttTopic)
            console.log('Connected to mqtt broker!')
        })
    }
}