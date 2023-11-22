//Joi schema
const joi = require('joi')

const userRegistrationSchema = joi.object({
    name: joi.string().min(3).max(15).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
  })

  module.exports = {
    userRegistrationSchema
  };