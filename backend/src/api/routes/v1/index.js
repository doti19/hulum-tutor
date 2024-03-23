const express = require('express');
const userRoutes = require('./user.route');
const personRoutes = require('./person.route');
const authRoutes = require('./auth.route');
const languageRoutes = require('./language.route');
// const partnerRoutes = require('./partner.route');


const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status',(req, res) => res.send('OK'));

/**
 * GET v1/docs
*/
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/person', personRoutes);
// router.use('/partner', partnerRoutes);
router.use('/auth', authRoutes);

router.use('/language', languageRoutes)

module.exports = router;
