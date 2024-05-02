import { MongoClient } from "mongodb"

export const Mongo = {
    async connect({ mongoConnectionString, mongoDbName }) {
        try {
            const client = new MongoClient(mongoConnectionString)

            await client.connect()
            const db = client.db(mongoDbName)

            this.client = client
            this.db = db

            console.log("Connected to MongoDB!")
        } catch (error) {
            console.log({ 
                text: "Error connecting to MongoDB!", 
                error 
            })
        }
    }
}
