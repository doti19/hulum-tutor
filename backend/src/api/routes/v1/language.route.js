const express = require('express');
const validator = require('express-joi-validation').createValidator({});

const languageController = require('../../controllers/language.controller');
const auth = require('../../middlewares/auth');
// const {restrictTo} = require('../../middlewares/auth');


const router = express.Router();

router
    .route('/')
    .get( languageController.getLanguages)
    .post(auth.auth(), auth.restrictTo(["super_admin", "admin"]), languageController.createLanguage);

router
    .route('/:languageId')
    .get(auth.auth(), auth.restrictTo(["super_admin", "admin"]), languageController.getLanguage)
    .patch(auth.auth(), auth.restrictTo(["super_admin", "admin"]),languageController.updateLanguage)
    .delete(auth.auth(), auth.restrictTo(["super_admin", "admin"]),languageController.deleteLanguage);



    module.exports = router;