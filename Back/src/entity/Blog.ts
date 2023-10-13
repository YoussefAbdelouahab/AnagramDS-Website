import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date : {type: Date, required: true},
    user_id: {type: String, required: true},
    url: { type: Object, required: true }
})

export const BlogModel = mongoose.model('Blog', BlogSchema);