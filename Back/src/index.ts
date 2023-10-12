import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import mongoose from "mongoose"
import * as cors from 'cors';
import {router} from "./router/router" 

const PORT: number = 8000;
const MONGO_URL = "mongodb+srv://abdelo:abdelo@cluster0.2vwraec.mongodb.net/";

let app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: "secret", saveUninitialized: false, resave: false }));

app.use('/api', router)

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});

mongoose.connect(MONGO_URL)
.then(() => {console.log("MongoDB Database Connected")})
.catch(error => {console.log(error)});




