const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

/// id ye gore bulma
// router.get('/:user_id',(req,res,next)=> {
//   const promise = User.findById(req.params.user_id);
  
//   promise.then((user)=> {
//     if(!user)
//       next({message:'The user was not found!',code:99})
//     res.json(user);
//   }).catch ((err) => {
//     res.json(err);
//   });
// });

//////////user kaydetme
router.post('/', (req, res, next) => {
  const user = new User(req.body);

  const promise = user.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=> {
    res.json(err);
  })
});

////  u api userın butun postlarını getiriyor 
router.get('/:user_id',(req,res)=> {
  const promise = User.aggregate([
    {
      $match:
             {
               _id: mongoose.Types.ObjectId(req.params.user_id)
             }
    },
    {
      $lookup: {
        from:'posts',
        localField:'_id',
        foreignField:'user_id',
        as:'Yayınlar'
      }
    },
    {
      $unwind:'$Yayınlar'
    }
    ]);
  promise.then((data) => {
    res.json(data);

  }).catch((err)=> {
    res.json(err);
  })
});


module.exports = router;
