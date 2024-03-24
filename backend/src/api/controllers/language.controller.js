const httpStatus = require('http-status');
const ApiError = require('../errors/api-error');
const pick = require('../utils/pick');

const catchAsync = require('../utils/catchAsync');
const {languageService } = require('../services');

const createLanguage = catchAsync(async(req, res)=>{
    const language = await languageService.createLanguage(req.body);
    res.status(httpStatus.CREATED).send(language);

});


const getLanguages = catchAsync(async(req, res)=>{
    const filter = pick(req.query, ['name',]);
  // console.log(req.query.item?.lostPlace);
    
    // const filter = req.query.
    // const filter = qs.parse(req.query);
    // console.log(filter);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
       const result = await languageService.getLanguages(filter, options);
       console.log('result', result)
       res.send(result);
   });
   
   const getLanguage = catchAsync(async(req, res)=>{
       const language = await languageService.getLanguageById(req.params.languageId);
     if (!language) {
       throw new ApiError(httpStatus.NOT_FOUND, 'Language not found');
     }
     res.send(language);
   });
   
   const updateLanguage = catchAsync(async(req, res)=>{
       const language = await languageService.updateLanguageById(req.params.languageId, req.body);
     res.send(language);
   });
   
   const deleteLanguage = catchAsync(async(req, res)=>{
       await languageService.deleteLanguageById(req.params.languageId);
       res.status(httpStatus.NO_CONTENT).send();
   });
   
 
   
   module.exports = {
       createLanguage,
       getLanguages,
       getLanguage,
       updateLanguage,
       deleteLanguage,
       
   }
   