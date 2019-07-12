const express = require('express');
const router = express.Router();

const Role = require('../models/Role');


router.post('/', (req, res, next) => {
  const role = new Role(req.body);

  const promise = role.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=> {
    res.json(err);
  })
});

router.get('/', (req, res) => {
    const promise = Role.find({});
    promise.then((data) => {
      res.json(data);
    }).catch((err)=> {
      res.json(err);
    })
  });


module.exports = router;
