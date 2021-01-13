import config from './config';

import express, { response } from 'express';
const server = express();

//Routes
server.get('/', (req, res) => {
    res.send('Hello Mikey');
});

//Route for files in public folder
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});