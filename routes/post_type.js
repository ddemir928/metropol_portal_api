const express = require('express');
const router = express.Router();

const Post_Type = require('../models/Post_Type');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});


router.post('/', (req, res, next) => {
  const post_type = new Post_Type(req.body);

  const promise = post_type.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=> {
    res.json(err);
  })
});

router.get('/', (req, res) => {
    const promise = Post_Type.find({});
    promise.then((data) => {
      res.json(data);
    }).catch((err)=> {
      res.json(err);
    })
  });


module.exports = router;
