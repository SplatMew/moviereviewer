import mongoose, { mongo } from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description:{
        type: String,
        required: true,
        trim: true,
    },

    localrating:{
        type: int,
        required:true,
    },

    globalrating:{
        type:int
    },

    image:{
        url: String,
        public_id: String
    }
});

export default mongoose.model('Post', postSchema);