var express = require("express");
var router = express.Router();

//const passport = require('../controllers/authController');

//const {validationRules, UsersController} = require("../controllers/UsersController");

router.get('/car', function(req, res){
    res.render('car');
})

module.exports = router;