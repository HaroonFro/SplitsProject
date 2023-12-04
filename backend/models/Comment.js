const { Schema } = require('mongoose')

const CommentSchema = new Schema (
    {
        comment: {
            type: String, required: true,
        },
        writer: {
            type: String, required: true,
        },
        postId: {
            type: String, required: false
        },
        userId: {
            type: String, required: true
        },
    },
    {timestamps: true}
)

module.exports = CommentSchema