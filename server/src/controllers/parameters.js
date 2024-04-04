import ParametersDataAccess from "../dataAccess/parameters.js"
import HttpRespose from "../helpers/response.js"

export default class ParametersController {
    constructor() {
        this.db = new ParametersDataAccess()
        this.httpRespose = new HttpRespose()
    }

    async getParameters() {
        try {
            const parameters = await this.db.getParameters()
            return this.httpRespose.ok(parameters)
        } catch (error) {
            return this.httpRespose.serverError(error)
        }
    }

    async addParameters(data) {
        try {
            const parameters = await this.db.addCarParameters(data)
            return this.httpRespose.ok(parameters)
        } catch (error) {
            return this.httpRespose.serverError(error)
        }
    }
}