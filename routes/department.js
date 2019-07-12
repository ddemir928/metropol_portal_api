const express = require('express');
const router = express.Router();

const Department = require('../models/Department');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});


router.post('/', (req, res, next) => {
  const department = new Department(req.body);

  const promise = department.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=> {
    res.json(err);
  })
});

router.get('/', (req, res) => {
    const promise = Department.find({});
    promise.then((data) => {
      res.json(data);
    }).catch((err)=> {
      res.json(err);
    })
  });


module.exports = router;
