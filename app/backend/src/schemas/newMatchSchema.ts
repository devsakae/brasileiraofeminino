import Joi = require('joi');

const newMatchSchema = Joi.object({
  homeTeamId: Joi.number().required(),
  awayTeamId: Joi.number().required(),
  homeTeamGoals: Joi.number().required(),
  awayTeamGoals: Joi.number().required(),
});

export default newMatchSchema;
