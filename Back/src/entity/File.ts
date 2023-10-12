import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    url: { type: String, required: true },
    article_id: {type: String, require: true}
})

export const FileModel = mongoose.model('File', FileSchema);