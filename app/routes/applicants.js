var express = require("express");
var router = express.Router();

//const passport = require('../controllers/authController');

//const {validationRules, UsersController} = require("../controllers/UsersController");

router.get('/careers', function(req, res){
    res.render('careers');
})

router.get('/apply', function(req, res){
    res.render('apply');
})

module.exports = router;