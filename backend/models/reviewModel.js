import mongoose, { mongo } from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
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
    },

    imdbid:{
        type: String,
    },

    year:{
        type: String,
    }
});

export default mongoose.model('Review', postSchema);