const Joi = require('joi');

// Schemas
const postSchema = Joi.object().keys({
    value: Joi.number().required()
});

const paramsSchema = Joi.object().keys({
   key: Joi.string().regex(/^[A-Za-z_]+$/).required()
});

// Validation calls
const validateParams = (req, res, next) => {
    Joi.validate(req.params, paramsSchema, (err) => {
        if (err) {
            return res.status(422).json(err);
        }
        return next();
    });
};

const validatePost = (req, res, next) => {
    Joi.validate(req.body, postSchema, (err) => {
        if (err) {
            return res.status(422).json(err);
        }
        return next();
    });
};


module.exports = {
    validateParams,
    validatePost
};
