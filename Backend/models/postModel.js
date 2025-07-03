import mongoose from "mongoose"

const userpostSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        location:{
            type: String,
            required: false,
        },
        description:{
            type: String,
            required: true,
        },
        contact:{
            type: String,
            required: true,
        },
        date:{
            type: String,
            required: true,
        }
    }
)

export const userPost = mongoose.model('post',userpostSchema)
