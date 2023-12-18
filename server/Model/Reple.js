const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        reple: String,
        author: {
            // users의 _id를 post에 넣기
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
        }
    },
    { collection: "reples" }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };