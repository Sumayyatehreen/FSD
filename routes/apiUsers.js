var express = require('express');
var router = express.Router();
// Child-level middleware
router.use(function(req, res, next) {
 console.log('Child Users Middleware');
 next();
});
// GET all users
router.get('/', function(req, res) {
 res.send('List of all users');
});
// GET user by ID
router.get('/:id', function(req, res) {
 res.send('User ID: ' + req.params.id);
});
module.exports = router;
