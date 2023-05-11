import mongoose, { mongo } from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    localrating: {
        type: Number,
        required:true,
    },

    globalrating:{
        type: Number
    },

    image:{
        url: String,
        public_id: String
    }
});

export default mongoose.model('Post', postSchema);