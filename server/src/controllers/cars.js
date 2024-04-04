import CarsDataAccess from "../dataAccess/cars.js"
import HttpRespose from "../helpers/response.js"

export default class CarsController {
    constructor() {
        this.db = new CarsDataAccess()
        this.httpRespose = new HttpRespose()
    }

    async getCars() {
        try {
            const parameters = await this.db.getCars()
            return this.httpRespose.ok(parameters)
        } catch (error) {
            return this.httpRespose.serverError(error)
        }
    }

}