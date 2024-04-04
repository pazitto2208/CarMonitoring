import { Mongo } from "../database/mongo.js"

const collectionName = 'cars'

export default class CarsDataAccess {
    async getCars() {
        const result = await Mongo.db
        .collection(collectionName)
        .find({})
        .toArray()

        return result
    }
}