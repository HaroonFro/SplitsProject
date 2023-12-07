const { Schema } = require('mongoose')

const PostSchema = new Schema (
    {
        title: {
            type: String, required: true, 
        },
        description: {
            type: String, required: true, 
        },
        image: {
            type: String, required: false
        },
        username: {
            type: String, required: true
        },
        userId: {
            type: String, required: true
        },
        categories: {
            type: Array, 
        }
    },
    {timestamps: true}
)

module.exports = PostSchema