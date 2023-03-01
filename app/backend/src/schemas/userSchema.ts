import Joi = require('joi');

const userFields = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default userFields;
