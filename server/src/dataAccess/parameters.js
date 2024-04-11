import { ObjectId } from "mongodb"
import { Mongo } from "../database/mongo.js"

const collectionName = 'parameters'

export default class ParametersDataAccess {
    async getParameters() {
        const result = await Mongo.db
        .collection(collectionName)
        .aggregate([
            {
                $lookup: {
                    from: 'cars',
                    localField: 'carId',
                    foreignField: '_id',
                    as: 'carDetails'
                }
            }
        ])
        .toArray()

        return result
    }

    async addCarParameters(data) {        
        data.carId = new ObjectId(data.carId)
        data.createdAt = new Date()

        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(data)

        return result
    }
}