import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        imdbid:{
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        }   
        
    }
)