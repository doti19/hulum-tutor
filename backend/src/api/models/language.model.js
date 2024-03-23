const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const moment = require('moment-timezone');
const jwtSimple = require('jwt-simple');
const {v4: uuidv4} = require('uuid');
const APIError = require('../errors/api-error');
const { env, jwt } = require('../../config/config');
const {roles} = require('../../config/roles');
const { toJSON, paginate } = require('./plugins');

/**
* User Roles
*/
// const roles = ['user', 'admin'];

/**
 * User Schema
 * @private
 */
const languageSchema = new mongoose.Schema({
  
  name: {
    type: String,
    unique: true,
    index: true,
    required: true,
    trim: true,
  },
 
}, {
  timestamps: true,
});

languageSchema.plugin(toJSON);
languageSchema.plugin(paginate);

languageSchema.statics={
  paginateIt,
}
module.exports = mongoose.model('Language', languageSchema);
