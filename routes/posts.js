const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//Get all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({msg: err});
    }
});

//create new record in db
router.post('/', async (req, res)=> {
    console.log(req.body);
    const newPost = new Post({
        title : req.body.title,
        description: req.body.description
    });
    //newPost.save();
    try{
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch(err) {
        res.json({msg: err});
    }    
});

//Get a Post By ID
router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post);
    }catch(err) {
        res.json({msg: err});
    }
} );

//update a post
router.patch('/:id', async (req, res) => {
    try{
        const updatedPodt = await Post.updateOne(
            {_id: req.params.id},
            { $set : {title: req.body.title} },            
            );
            res.json(updatedPodt);
    }catch(err){
        res.json({msg: err});
    }
});

// delete a post
router.delete('/:id', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id:req.params.id});
        res.json(removedPost);

    }catch(err) {
        res.json({msg: err});
    }
});

module.exports = router;