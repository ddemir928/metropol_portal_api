const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});


router.post('/', (req, res, next) => {
  const category = new Category(req.body);

  const promise = category.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=> {
    res.json(err);
  })
});

router.get('/', (req, res) => {
    const promise = Category.find({});
    promise.then((data) => {
      res.json(data);
    }).catch((err)=> {
      res.json(err);
    })
  });


module.exports = router;
