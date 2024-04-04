import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import HttpRespose from './helpers/response.js'

async function main() {

    const hostname = 'localhost'
    const port = 3000

    const httpResponse = new HttpRespose()

    const app = express()

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send(httpResponse.ok('Welcome to my Car Project!'))
    })

    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })

}

main()