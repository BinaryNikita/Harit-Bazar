import express  from 'express';
import { connection } from './config/dbConfig.js';

const app = express();



app.listen(4000, () => {
    console.log("server started....");
})