//Imports
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import * as express from "express";
import routes from "./routes/index";
import * as cors from 'cors'
import * as path from 'path'

//TODO CONFIG CORS
//create connection
createConnection().then(async connection => {

    //cors CONFIG
    const corsOption = {
        origin:'https://simple-list-app.herokuapp.com',
        optionsSuccessStatus:200
    }

    //create express app
    const app = express();

    //Settings
    app.set('port', process.env.PORT || 3000)

    //Middlewares
    app.use(express.json())
    app.use(express.static(path.join(__dirname, '../bin')))

    app.use(cors(corsOption))
    app.use('/api',routes)
    //Routes
    app.use('/*', (req ,res ) => {
        res.sendFile(path.join(__dirname, '../bin/index.html'))
    })

    //run app
    app.listen(app.get('port'), () => {
        console.log("express server is running on port ", app.get('port'))
    })

   


}).catch(error => console.log(error));
