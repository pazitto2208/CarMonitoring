import mqtt from 'mqtt'

export default class MqttClient {
    constructor (mqttTopic) {
        this.client = mqtt.connect('mqtt://broker.emqx.io:1883', {
            clientId: `server`,
            clean: true,
            username: 'emqx',
            password: 'public',
        })

        this.client.on('connect', () => { 
            this.client.subscribe(mqttTopic)
        })
    }
}