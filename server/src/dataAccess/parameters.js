import { ObjectId } from "mongodb"
import { Mongo } from "../database/mongo.js"

const collectionName = 'parameters'

export default class ParametersDataAccess {
    async getParameters() {
        const result = await Mongo.db
        .collection(collectionName)
        .find({})
        .toArray()

        return result
    }

    async addCarParameters(data) {
        data = JSON.parse(data)
        data.carId = new ObjectId(data.carId)
        data.createdAt = new Date()

        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(data)

        return result
    }
}