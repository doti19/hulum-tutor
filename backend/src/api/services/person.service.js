const httpStatus = require("http-status");
const { Person } = require("../models");
const ApiError = require("../errors/api-error");
const fs = require('fs');
const CsvParser = require('json2csv').Parser;

const path = require('path');
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createPerson = async (personBody, file) => {
  // console.log(user.role);
  // if(user.role=='super_admin' || user.role=='admin') {

  // if(user.role=='admin'&& (userBody.role=='admin' ||userBody.role=='super_admin')){
  //   throw new ApiError({status: httpStatus.FORBIDDEN, message: 'you cant create a user with that role'});

  // }
  // if (await Person.isEmailTaken(personBody.email)) {
  //   throw new ApiError({
  //     status: httpStatus.BAD_REQUEST,
  //     message: "Email already taken",
  //     isPublic: true,
  //   });
  // }

  let resume;
  let uploadPath;
  if (!file || Object.keys(file).length == 0) {
    throw new ApiError({
      status: httpStatus.BAD_REQUEST,
      message: "No file selected",
      isPublic: true,
    });
  }
  if(file.resume.mimetype != 'application/pdf'){
    console.log(file.resume.mimetype);
    throw new ApiError({
      status: httpStatus.BAD_REQUEST,
      message: "Only Pdf files are allowed",
      isPublic: true,
    });
  }
 
  //greater than 5mb
  if(file.resume.size > 5242880){
    throw new ApiError({
      status: httpStatus.BAD_REQUEST,
      message: "Please make sure the file size is under 5MB",
      isPublic: true,
    });
  }
  resume = file.resume;
  
  const person = await Person.create(personBody);
  console.log('person created'+ person._id);
  const fileName =`${person.email}_${person._id}.${resume.mimetype.split('/')[1]}`;
  
    uploadPath =path.join(`resumes/${fileName}`);
  resume.mv(uploadPath,function(err){
    if(err){
      person.deleteOne();
      throw new ApiError({status: httpStatus.INTERNAL_SERVER_ERROR, message: 'Please Try Again'});
    }
  });

   Object.assign(person,{resume: fileName});
   await person.save();
  console.log('file saved');
    return person;

  
  //  }else{
  //   throw new ApiError({status: httpStatus.FORBIDDEN, message: 'you cant create a user'});
  //  }
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPeople = async (filter, options) => {
  // console.log('yo '+ {...filter} +  ' '+ {...options});
  const people = await Person.paginateIt(filter, options);

  return people;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getPersonById = async (id) => {
  const person = await Person.findById(id);

  return person;
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getPersonByEmail = async (email) => {
  return Person.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} personId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updatePersonById = async (personId, updateBody) => {
  const person = await getPersonById(personId);
  if (!person) {
    throw new ApiError(httpStatus.NOT_FOUND, "Person not found");
  }
  if (
    updateBody.email &&
    (await Person.isEmailTaken(updateBody.email, personId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  Object.assign(person, updateBody);
  await person.save();
  return person;
};

/**
 * Delete user by id
 * @param {ObjectId} personId
 * @returns {Promise<User>}
 */
const deletePersonById = async (personId) => {
  const person = await getPersonById(personId);

  if (!person) {
    throw new ApiError({
      status: httpStatus.NOT_FOUND,
      message: "person not found",
      isPublic: true,
    });
  }
 

  const fileName =`${person.email}_${person._id}`;
  
    uploadPath =path.join(`resumes/${fileName}`);

    fs.unlink(uploadPath,(err)=>{
      if(err) throw new ApiError({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: "please try again",
        isPublic: true,
      });;
      console.log('deleted');
    });


  await person.deleteOne();
  return person;
};

const downloadResumeById = async (personId) => {
  const person = await getPersonById(personId);

  if (!person) {
    throw new ApiError({
      status: httpStatus.NOT_FOUND,
      message: "person not found",
      isPublic: true,
    });
  }


  const fileName =`${person.email}_${person._id}.pdf`;
  
    directoryPath =path.join(`resumes/${fileName}`);

   return {
    directoryPath:directoryPath,
    fileName: fileName,
};
}

const exportData = async()=>{
  const peopleData = await queryPeople({}, {});
  let people = [];

  peopleData.results.forEach((person) => {
    people.push({
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      phoneNumber: person.phoneNumber,
      gender: person.gender,
      resume: person.resume,
      city: person.city,
      streetAddress: person.streetAddress,
      postNo: person.postNo,
      language: person.language,
      teachingExperience: person.teachingExperience,
      createdAt: person.createdAt,
    });
});
const csvFields = ['First Name', 'Last Name', 'Email', 'Phone Number','Gender', 'Resume Name', 'City', 'Street Address', 'Post No', 'Language', 'Teaching Experience', 'Register Date'];
 const csvParser = new CsvParser({csvFields});
const csvData = csvParser.parse(people);
return csvData;
}
const search = async (keyword) => {
  const result = Person.find({
    $or: [{ email: { $regex: keyword } }],
  });
  return result;
};

module.exports = {
  createPerson,
  queryPeople,
  getPersonById,
  getPersonByEmail,
  updatePersonById,
  deletePersonById,
  downloadResumeById,
  exportData,
  search,
};
