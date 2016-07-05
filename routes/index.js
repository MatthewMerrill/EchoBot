var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var body = {};
  body.message = req.body.message || "No message found :(";
  body.message = (body.message == "What is love?") ? "Baby don't hurt me." : body.message;
  body.message = (body.message == "x") ? "JASONNNN!!" : body.message;
  body.message = (body.message == "hackme") ? "<script>console.log('get h8x0r3d')</script>" : body.message;

  body.echoed = true;
  res.send(body);
});

module.exports = router;
