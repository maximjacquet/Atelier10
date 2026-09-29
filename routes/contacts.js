/**
  * @file     contact.js
  * @author   Maxim Jacquet (maxim.jacquet@outlook.com)
  * @version  1
  * @date     29/09/2026
  * @brief    Routeur de la page de contact
  */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/contacts', { title: 'Contact' });
});

module.exports = router;    
