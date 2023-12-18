const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        postNum: Number,
        image: String,
        author: {
            // users의 _id를 post에 넣기
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    { collection: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };