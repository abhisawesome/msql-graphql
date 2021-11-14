import express from 'express';
import cors from 'cors';
import connect from './db';
import { PORT } from './config';

const app = express();
app.use(express.json());
app.use(cors());


app.get('/test', (req, res) => {
    return res.status(200).send({ status: true });
})

app.listen(PORT, () => {
    connect();
    console.log('App listing in port:', PORT)
})