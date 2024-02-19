import mongoose, { Schema } from "mongoose";

const smmSchema = new Schema({
    name: String,
    title: String ,
    img1: String, 
    img2: String
});

export const smmModel = mongoose.model('smm', smmSchema);