var express = require('express');
var router = express.Router();


const ctrData = require('../controllers/dataController');


router.post('/addData', ctrData.addData);
router.get('/getAllData', ctrData.getData);



module.exports = router;
