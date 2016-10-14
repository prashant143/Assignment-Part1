var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prahshant Vaghela' });
});
router.get('/education', function(req, res, next) {
  res.render('Education', { title: 'Education - Prahshant Vaghela' });
});
router.get('/work', function(req, res, next) {
  res.render('work', { title: 'Work - Prahshant Vaghela' });
});
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Skills - Prahshant Vaghela' });
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio - Prahshant Vaghela' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - Prahshant Vaghela' });
});

module.exports = router;
