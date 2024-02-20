import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema({
    name: String,
    image: String,
    price:Number, 
    discount : Number
});

export const cardModel = mongoose.model('card', cardSchema);