import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import { createPool } from 'mysql';
import * as account from './account-modules/account.js';

const db = createPool({
    connectionLimit: 100,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port
});

const app = express();

app.get('/' , (req,res) => {
    res.redirect('C:/Users/alexa/Documents/GitHub/barpal-site/nodejs-login/login/src/index.js')
})

app.listen(process.env.port, ()=> console.log('server started on port ' + process.env.port));
