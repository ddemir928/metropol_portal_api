const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post_Like = require('../models/Post_Like');



router.get('/', (req, res, next) => {
  const post_like = new Post_Like(req.body);

  const promise = post_like.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err)=> {
    res.json(err);
  })
});

router.get('/:post_id',(req,res)=> {
    const{post_id,user_id} = req.params;
    
    const promise = Post_Like.aggregate([
        {
           $match: {
                post_id:mongoose.Types.ObjectId(req.params.post_id),
                user_id:mongoose.Types.ObjectId(req.params.user_id)
           },

        }
        ]);
    
        promise.then((data) => {
                res.json(data);
          
              }).catch((err)=> {
               
                res.json(err);
              })
            });

    router.put('/:post_id',(req,res)=> {
        const{post_id,user_id} = req.params;
    
        promise = Post_Like.aggregate([
            {
                $match: {
                    post_id:mongoose.Types.ObjectId(req.params.post_id),
                    user_id:mongoose.Types.ObjectId(req.params.user_id)
                },
                // { 
                //     $cond: {
                //         if: {res.params.isLiked:true},
                //         then: false, 
                //         else: true } 
                // }
             }
            ]);
        
            promise.then((data) => {
                res.json(data);
                
                }).catch((err)=> {
                    
                res.json(err);
                    })
            });

module.exports=router;