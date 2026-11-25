var express = require('express');
var router = express.Router();
var apiUsers = require('./apiusers');
// Parent-level middleware
router.use(function(req, res, next) {
 console.log('Parent API Middleware');
 next();
});
// Mount child router
router.use('/users', apiUsersRouter);
module.exports = router;
