// const express = require("express");
// const auth = require("../../middlewares/auth");
// // const validator = require('../../middlewares/validate');
// const validator = require("express-joi-validation").createValidator({});
// // const personValidation = require("../../validations/person.validation");
// const personController = require("../../controllers/person.controller");

// const router = express.Router();

// router
//   .route("/")
//   .post(auth.auth(),auth.restrictTo(['super_admin','admin']), validator.body(userValidation.createUser.body), userController.createUser)
//   .get(
//     auth.auth(),
//     auth.restrictTo(["super_admin", "admin"]),
//     validator.query(personValidation.getPeople.query),
//     personController.getPeople
//   )
//   .post(personController.createPerson);

// // validator.body(personValidation.createPerson.body),
// router
//   .route("/export")
//   .get(
//     // auth.auth(),
//     // auth.restrictTo(["super_admin", "admin"]),
//     personController.exportData
//   );
// router
//   .route("/file/:personId")
//   .get(
//     auth.auth(),
//     auth.restrictTo(["super_admin", "admin"]),
//     validator.params(personValidation.getPerson.params),
//     personController.downloadResumeById
//   );
// router
//   .route("/:personId")
//   .get(
//     auth.auth(),
//     auth.restrictTo(["super_admin", "admin"]),
//     validator.params(personValidation.getPerson.params),
//     personController.getPerson
//   )
//   .patch(
//     auth.auth(),
//     auth.restrictTo(["super_admin", "admin"]),
//     validator.params(personValidation.updatePerson.params),
//     validator.body(personValidation.updatePerson.body),
//     personController.updatePerson
//   )
//   .delete(
//     auth.auth(),
//     auth.restrictTo(["super_admin", "admin"]),
//     validator.params(personValidation.deletePerson.params),
//     personController.deletePerson
//   );
// router
//   .route("/search/:keyword")
//   .get(
//     auth.auth(),
//     auth.restrictTo(["super_admin", "admin"]),
//     personController.search
//   );

// module.exports = router;
