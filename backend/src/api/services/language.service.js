const httpStatus = require('http-status');
const {Language} = require('../models');
const ApiError = require('../errors/api-error');

/**
 * Create an item
 * @param {Object} languageBody
 * @returns {Promise<Catagory>}
 */
const createLanguage = async (languageBody) => {
  
      return await Language.create(languageBody);
    };
  
const getLanguages = async(filter, options)=>{
  const languages = await Language.paginateIt({},[]);

  return languages;
}

const getLanguageById = async(languageId)=>{
  const language = await Language.findById(languageId);
  return language;
}

const updateLanguageById= async(languageId, updateBody) =>{
  const language = await getLanguageById(languageId);
  if(!language){
    throw new ApiError(httpStatus.NOT_FOUND, 'Language not found');
  }
  
  Object.assign(language, updateBody);
  await language.save();
  return language;

}

const deleteLanguageById = async(languageId) =>{
  const language = await getLanguageById(languageId);
  if(!language){
    throw new ApiError(httpStatus.NOT_FOUND, 'language Not found');
  }
  await language.deleteOne();
  return language;
}

    
    module.exports = {
      createLanguage,
      getLanguages,
    getLanguageById,
    updateLanguageById,
    deleteLanguageById,
  
    }