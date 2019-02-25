// Import dependencies
import { Router } from 'express';
const api = Router();

// imports
import controller from './controller';
import validate from '../middleware/schemaValidators';

api.route('*').all((req, res, next) => {
    console.info('Timestamp: ', new Date().toLocaleString());
    console.info('url: ', req.url);
    next();
});

// api
api.get('/metric/:key/sum', validate.validateParams, controller.getSum);
api.post('/metric/:key', validate.validateParams, validate.validatePost, controller.postVisitor);


module.exports = api;
