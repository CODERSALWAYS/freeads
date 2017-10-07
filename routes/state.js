var express = require('express');
var router = express.Router();
var maindata = require('../model/statemodel');

router.get('/', function(req, res, next) {
	res.render('admin');
});

router.get('/state', function(req, res, next){
	console.log('ok inside');
	res.render('stateadd');
});
router.post('/stateadd', function(req, res, next){

   var inputfielddata = {
		sname : req.body.sname, 
		cdate : req.body.cdate, 
		udate : req.body.udate,	 
	}
	console.log(inputfielddata);
	maindata.addState(inputfielddata, function(error , result){
		if (error) {
			var msg = 'input error';
			res.redirect('/admin/state?err='+msg);
		}
		else{
			res.redirect('/admin/state');	
		}
	});
});



module.exports = router;