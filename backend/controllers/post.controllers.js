
import Post from '../models/reviewModel.js'


export const getReviews = async (req,res) =>{
    const posts = await Post.find()
    res.send(posts);
}

export const createReview = async (req,res) => {
    const{title, description} = req.body;
    const newPost = new Post({title, description,localrating})
    console.log(newPost)
    await newPost.save()
    return res.json(newPost)
}

export const updateReview = async(req,res) =>{
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log(post)
    return res.send('received')
};

export const deleteReview = async(req,res) => {
    const postRemoved = await Post.findByIdAndDelete(req.params.id)
    if(!postRemoved) return res.sendStatus(404);
    return res.sendStatus(204);
    
};

export const getReview = async(req,res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.json(post);
};