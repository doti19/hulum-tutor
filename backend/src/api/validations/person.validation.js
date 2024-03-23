const Joi = require('joi');
const {password, objectId} = require('./custom.validation');



  // POST /v1/users
  const createPerson= {
    body: Joi.object({
      email: Joi.string().email().required(),
      firstName: Joi.string().max(128).required(),
      lastName: Joi.string().max(128).required(),
      city: Joi.string().required(),
      streetAddress: Joi.string(),
      postNo: Joi.number().integer(),
      language: Joi.string().required(),
      gender: Joi.string().required(),
      resume: Joi.optional(),

    }),
  };
  // GET /v1/users
  const getPeople= {
    query: Joi.object({
      firstName: Joi.string(),
      lastName: Joi.string(),
      city: Joi.string(),
      language: Joi.string(),
      teachingExperience: Joi.number().integer(),
      gender: Joi.string(),
      sortBy: Joi.string(),
      limit: Joi.number().integer(),
      page: Joi.number().integer(),
     
      // perPage: Joi.number().integer().min(1).max(100),
      // email: Joi.string(),
      // role: Joi.array().items(Joi.string().valid("admin", "user"))
      // role:  Joi.string().valid(User.roles).required(),
    }),
    // body: Joi.object({
    //   userId: Joi.string().required()
    // })
  };

 // GET /v1/users/:userId
 const  getPerson = {
    params: Joi.object({
      personId: Joi.string().custom(objectId),
    }),
  };

  

  // PUT /v1/users/:userId
  // replaceUser: {
  //   body: Joi.object({
  //     email: Joi.string().email().required(),
  //     password: Joi.string().custom(password).required(),
  //     name: Joi.string().max(128),
  //     role: Joi.array().items(Joi.string().valid("admin", "user"))

  //   }),
  //   params: Joi.object({
  //     userId: Joi.string().custom(objectId).required(),
  //   }),
  // },

  // PATCH /v1/users/:userId
 const  updatePerson= {
    params: Joi.object({
      personId: Joi.string().custom(objectId).required(),
    }),
    body: Joi.object({
      email: Joi.string().email(),
     
      firstName: Joi.string().max(128),
      lastName: Joi.string().max(128),
      city: Joi.string(),
      streetAddress: Joi.string(),
      postNo: Joi.number().integer(),
      language: Joi.string(),
      gender: Joi.string(),
      resume: Joi.optional(),

    }).min(1),
  };

  // DELETE /v1/users/:userId
  const deletePerson = {
    params: Joi.object({
      personId: Joi.string().custom(objectId).required(),
    }),
  };

module.exports = {
   createPerson,
   getPeople,
   getPerson,
   updatePerson,
   deletePerson,
};