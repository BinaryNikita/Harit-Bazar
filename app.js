import express  from 'express';
import categoryRouter from './routes/category.routes.js';
import { connection } from './config/dbConfig.js';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/category', categoryRouter);

app.listen(4000, () => {
    console.log("server started....");
})