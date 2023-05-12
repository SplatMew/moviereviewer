
import Review from '../models/reviewModel.js'


export const getReviews = async (req,res) =>{
    const posts = await Review.find()
    res.send(posts);
}

export const createReview = async (req,res) => {
    const{title, description, localrating} = req.body;
    const newPost = new Review({title, description, localrating})
    console.log(newPost)
    await newPost.save()
    return res.json(newPost)
}

export const updateReview = async(req,res) =>{
    const post = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log(post)
    return res.send('received')
};

export const deleteReview = async(req,res) => {
    const postRemoved = await Review.findByIdAndDelete(req.params.id)
    if(!postRemoved) return res.sendStatus(404);
    return res.sendStatus(204);
    
};

export const getReview = async(req,res) => {
    const post = await Review.findById(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.json(post);
};