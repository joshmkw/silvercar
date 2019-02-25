// Import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import api from './api/routes';
import { version } from './package.json';
import { name } from './package.json';

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api router
app.use('/', api);

app.listen( port, () => {
    console.log(`APP: ${name}`);
    console.info(`Version: ${version}`);
    console.info(`Start Time: ${new Date().toLocaleString()}`);
    console.info(`Started on port ${port}`);
});
