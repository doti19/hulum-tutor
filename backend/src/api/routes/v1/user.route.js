const express = require('express');
const auth = require('../../middlewares/auth');
// const validator = require('../../middlewares/validate');
const validator = require('express-joi-validation').createValidator({});
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  // .post(auth.auth(),auth.restrictTo(['super_admin','admin']), validator.body(userValidation.createUser.body), userController.createUser)
  // .get(auth.auth(),auth.restrictTo(['super_admin','admin']), validator.query(userValidation.getUsers.query), userController.getUsers);
// router.get('/delivery', auth.auth(),auth.emailVerified(),auth.restrictTo(['super_admin','admin', 'db_analysist']),userController.getDeliveryUsers) ;
// router.get('/delivery/:userId', auth.auth(), auth.emailVerified(),userController.getDeliveryUser);
router
  .route('/profile')
  .get(auth.auth(), userController.getMe);

// router
//   .route('/:userId')
//   .get(auth.auth(),auth.emailVerified(),auth.restrictTo(['super_admin','admin']), validator.params(userValidation.getUser.params), userController.getUser)
//   .patch(auth.auth(),auth.emailVerified(),auth.restrictTo(['super_admin','admin']), validator.params(userValidation.updateUser.params), validator.body(userValidation.updateUser.body), userController.updateUser)
//   .delete(auth.auth(),auth.emailVerified(),auth.restrictTo(['super_admin','admin']), validator.params(userValidation.deleteUser.params), userController.deleteUser);
// router
// router
//   .route('/search/:keyword')
//   .get(auth.auth(),auth.emailVerified(),auth.restrictTo(['super_admin','admin']), userController.search);

module.exports = router;









//########################################################################################
// const express = require('express');
// // const validate = require('express-validation');
// const validator = require('express-joi-validation').createValidator({});
// const controller = require('../../controllers/user.controller');
// // const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');
// const auth = require('../../middlewares/auth');

// const {
//   listUsers,
//   createUser,
//   replaceUser,
//   updateUser,
// } = require('../../validations/user.validation');

// // module.exports = function(app) {
// //   app.use(function(req, res, next) {
// //     res.header(
// //       "Access-Control-Allow-Headers",
// //       "x-access-token, Origin, Content-Type, Accept"
// //     );
// //     next();
// //   });
// // }
// const router = express.Router();

// /**
//  * Load user when API with userId route parameter is hit
//  */
// router.param('userId', controller.load);

// router
//   .route('/')
//   /**
//    * @api {get} v1/users List Users
//    * @apiDescription Get a list of users
//    * @apiVersion 1.0.0
//    * @apiName ListUsers
//    * @apiGroup User
//    * @apiPermission admin
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiParam  {Number{1-}}         [page=1]     List page
//    * @apiParam  {Number{1-100}}      [perPage=1]  Users per page
//    * @apiParam  {String}             [name]       User's name
//    * @apiParam  {String}             [email]      User's email
//    * @apiParam  {String=user,admin}  [role]       User's role
//    *
//    * @apiSuccess {Object[]} users List of users.
//    *
//    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
//    * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
//    */
//   // .get(authorize(ADMIN), validator.query(listUsers.query), controller.list)
//   .get(  [auth(['admin'])], validator.query(listUsers.query), controller.list)
//   /**
//    * @api {post} v1/users Create User
//    * @apiDescription Create a new user
//    * @apiVersion 1.0.0
//    * @apiName CreateUser
//    * @apiGroup User
//    * @apiPermission admin
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiParam  {String}             email     User's email
//    * @apiParam  {String{6..128}}     password  User's password
//    * @apiParam  {String{..128}}      [name]    User's name
//    * @apiParam  {String=user,admin}  [role]    User's role
//    *
//    * @apiSuccess (Created 201) {String}  id         User's id
//    * @apiSuccess (Created 201) {String}  name       User's name
//    * @apiSuccess (Created 201) {String}  email      User's email
//    * @apiSuccess (Created 201) {String}  role       User's role
//    * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
//    *
//    * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
//    * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
//    * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
//    */
//   // .post(authorize(ADMIN), validator.query(createUser), controller.create);
//   .post( validator.query(createUser), controller.create);

// router
//   .route('/profile')
//   /**
//    * @api {get} v1/users/profile User Profile
//    * @apiDescription Get logged in user profile information
//    * @apiVersion 1.0.0
//    * @apiName UserProfile
//    * @apiGroup User
//    * @apiPermission user
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiSuccess {String}  id         User's id
//    * @apiSuccess {String}  name       User's name
//    * @apiSuccess {String}  email      User's email
//    * @apiSuccess {String}  role       User's role
//    * @apiSuccess {Date}    createdAt  Timestamp
//    *
//    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
//    */
//   // .get(authorize(),validator.query(), controller.loggedIn);
//   .get(validator.query(), controller.loggedIn);

// router
//   .route('/:userId')
//   /**
//    * @api {get} v1/users/:id Get User
//    * @apiDescription Get user information
//    * @apiVersion 1.0.0
//    * @apiName GetUser
//    * @apiGroup User
//    * @apiPermission user
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiSuccess {String}  id         User's id
//    * @apiSuccess {String}  name       User's name
//    * @apiSuccess {String}  email      User's email
//    * @apiSuccess {String}  role       User's role
//    * @apiSuccess {Date}    createdAt  Timestamp
//    *
//    * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
//    * @apiError (Forbidden 403)    Forbidden    Only user with same id or admins can access the data
//    * @apiError (Not Found 404)    NotFound     User does not exist
//    */
//   // .get(authorize(LOGGED_USER), controller.get)
//   .get( controller.get)
//   /**
//    * @api {put} v1/users/:id Replace User
//    * @apiDescription Replace the whole user document with a new one
//    * @apiVersion 1.0.0
//    * @apiName ReplaceUser
//    * @apiGroup User
//    * @apiPermission user
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiParam  {String}             email     User's email
//    * @apiParam  {String{6..128}}     password  User's password
//    * @apiParam  {String{..128}}      [name]    User's name
//    * @apiParam  {String=user,admin}  [role]    User's role
//    * (You must be an admin to change the user's role)
//    *
//    * @apiSuccess {String}  id         User's id
//    * @apiSuccess {String}  name       User's name
//    * @apiSuccess {String}  email      User's email
//    * @apiSuccess {String}  role       User's role
//    * @apiSuccess {Date}    createdAt  Timestamp
//    *
//    * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
//    * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
//    * @apiError (Forbidden 403)    Forbidden    Only user with same id or admins can modify the data
//    * @apiError (Not Found 404)    NotFound     User does not exist
//    */
//   // .put(authorize(LOGGED_USER),validator.body(replaceUser.body), validator.params(replaceUser.params), controller.replace)
//   /**
//    * @api {patch} v1/users/:id Update User
//    * @apiDescription Update some fields of a user document
//    * @apiVersion 1.0.0
//    * @apiName UpdateUser
//    * @apiGroup User
//    * @apiPermission user
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiParam  {String}             email     User's email
//    * @apiParam  {String{6..128}}     password  User's password
//    * @apiParam  {String{..128}}      [name]    User's name
//    * @apiParam  {String=user,admin}  [role]    User's role
//    * (You must be an admin to change the user's role)
//    *
//    * @apiSuccess {String}  id         User's id
//    * @apiSuccess {String}  name       User's name
//    * @apiSuccess {String}  email      User's email
//    * @apiSuccess {String}  role       User's role
//    * @apiSuccess {Date}    createdAt  Timestamp
//    *
//    * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
//    * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
//    * @apiError (Forbidden 403)    Forbidden    Only user with same id or admins can modify the data
//    * @apiError (Not Found 404)    NotFound     User does not exist
//    */
//   // .patch(authorize(LOGGED_USER), validator.body(updateUser.body), validator.params(updateUser.params),controller.update)
//   .patch( validator.body(updateUser.body), validator.params(updateUser.params),controller.update)
//   /**
//    * @api {patch} v1/users/:id Delete User
//    * @apiDescription Delete a user
//    * @apiVersion 1.0.0
//    * @apiName DeleteUser
//    * @apiGroup User
//    * @apiPermission user
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiSuccess (No Content 204)  Successfully deleted
//    *
//    * @apiError (Unauthorized 401) Unauthorized  Only authenticated users can delete the data
//    * @apiError (Forbidden 403)    Forbidden     Only user with same id or admins can delete the data
//    * @apiError (Not Found 404)    NotFound      User does not exist
//    */
//   // .delete(authorize(LOGGED_USER), controller.remove);
//   .delete( controller.remove);

// module.exports = router;
