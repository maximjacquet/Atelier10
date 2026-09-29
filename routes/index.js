/**
  * @file     app.js
  * @author   Maxim Jacquet (maxim.jacquet@outlook.com)
  * @version  1
  * @date     22/09/2026
  * @brief    "main" de l'atelier
  */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Accueil' });
});

module.exports = router;    
