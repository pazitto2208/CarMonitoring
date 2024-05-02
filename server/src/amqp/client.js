import amqp from 'amqplib'

export default class AmqpClient {
    constructor(url) {
        this.url = url
    }

    async connect() {
        try {
            const amqpConnection = await amqp.connect(this.url)
        
            const amqpChannel = await amqpConnection.createChannel()
            
            console.log('Connected to AMQP broker!')

            return amqpChannel
        } catch (error) {
            console.log(error)
        }
    }
}