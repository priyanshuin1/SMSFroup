const mongoose = require('mongoose');
const Data = require('./../models/dataModel')
const jsonFile = require('./../../data.json');
var fs = require('fs');
module.exports.addData = (req, res, next) => {
    console.log('req.body==', req.body)
    
//    for(let i=0;i<req.body.length; i++){
//     var data = new Data({
//         Id :  req.body[i].id,
//         city : req.body[i].city,
//         startDate : req.body[i].start_date,
//         endDate : req.body[i].end_date,
//         price :  req.body[i].price,
//         color : req.body[i].color,
//         status : req.body[i].status 
//     });

var data = new Data({
            Id :  0,
            city : req.body.city,
            startDate : req.body.start_date,
            endDate : req.body.end_date,
            price :  req.body.price,
            color : req.body.color,
            status : req.body.status 
        });

    data.save((err, doc) => {
        console.log('doc==', doc);
        if (doc) {
            var outputJSON = {
                 status: 200,
                 msg: 'Added Successfully!!',
                 data: doc
             }
             res.status(200).send(outputJSON)
         }
         else {
            var outputJSON = {
                 status: 201,
                 msg: 'Error in data'
             }
             res.status(201).send(outputJSON)
         }
       

    });
//    }

  
    
}


exports.getData = function (req,res){
    Data.find({})
    .exec((err, resp) => {
        if (resp) {
           var outputJSON = {
                status: 200,
                data: resp
            }
            res.status(200).send(outputJSON)
        }
        else {
           var outputJSON = {
                status: 201,
                msg: 'data not found'
            }
            res.status(201).send(outputJSON)
        }
    })
    
  }


  
