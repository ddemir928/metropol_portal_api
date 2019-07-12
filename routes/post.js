const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/Post');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

router.post('/', (req, res, next) => {

  const post = new Post(req.body);

  const promise = post.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=> {
    res.json(err);
  })
});



  router.put('/:post_id',(req,res,next)=> {
    const promise = Post.findByIdAndUpdate(req.params.post_id,req.body,
      {
        new:true
      });

    promise.then((post)=> {
      if(!post)
        next({message:'The post was not found!',code:99})
      res.json({status:2});
    }).catch ((err) => {
      res.json(err);
    });
  });

 
 
  // router.get('/:post_url',(req,res)=> {
  //   const promise = Post.aggregate([
  //     {
  //       $match:
  //              {
  //                post_url: req.params.post_url,
                 
  //              }
  //     },
  //     {
  //       $lookup: {
  //         from:'users',
  //         localField:'user_id',
  //         foreignField:'_id',
  //         as:'Kullanıcı'
  //       }
  //     },
  //     {
  //       $unwind:'$Kullanıcı'
  //     },
  //     {
  //       $lookup: {
  //         from:'departments',
  //         localField:'department_id',
  //         foreignField:'_id',
  //         as:'Departman'
  //       }
        
  //     },
  //     {
  //       $unwind:'$Departman'
  //   }
  //     ]);
  //   promise.then((data) => {
  //     res.json(data);

  //   }).catch((err)=> {
     
  //     res.json(err);
  //   })
  // });


  router.get('/:post_id',(req,res)=> {
    const promise = Post.aggregate([
      {
        $match:
               {
                 _id:mongoose.Types.ObjectId(req.params.post_id),
                 
               }
      },
      {
        $lookup: {
          from:'post_likes',
          localField:'_id',
          foreignField:'post_id',
          as:'Likes'
        }
      },
      {
        $unwind:'$Likes'
      },
      ]);
    promise.then((data) => {
      res.json(data);

    }).catch((err)=> {
     
      res.json(err);
    })
  });




module.exports = router;
