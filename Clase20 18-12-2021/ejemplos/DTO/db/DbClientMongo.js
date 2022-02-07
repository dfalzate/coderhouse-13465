/* eslint-disable no-console */
import Config from '../config.js'
import CustomError from '../errores/CustomError.js'
import mongoose from 'mongoose';
import DbClient from './DbClient.js'

class MyMongoClient extends DbClient {
    constructor() {
        super()
        this.connected = false
        this.client = mongoose
    }

    async connect() {
        try {
            await this.client.connect(Config.db.cnxStr + Config.db.name, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            })
            console.log('base de datos conectada')
            this.connected = true
        } catch (error) {
            throw new CustomError(500, 'error al conectarse a mongodb 1', error)
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close()
            console.log('base de datos desconectada')
            this.connected = false
        } catch (error) {
            throw new CustomError(500, 'error al conectarse a mongodb 2', error)
        }
    }
}

export default MyMongoClient