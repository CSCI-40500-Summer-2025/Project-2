import express from 'express'
import { userPost } from '../models/postModel.js'
const router = express.Router()

//Route for saving a new user's Post
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.contact ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: 'Please send all required field: title, description, contact, date'
            })
        }
        const newUserPost = {
            title: request.body.title,
            location: request.body.location,
            description: request.body.description,
            contact: request.body.contact,
            date: request.body.date
        }
        const newPost = await userPost.create(newUserPost)
        return response.status(201).send(newPost)
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

//Route for getting users Post
router.get('/', async (request, response) => {
    try {
        const posts = await userPost.find({});
        return response.status(200).json(posts);
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

//Route for getting a user's Post
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const posts = await userPost.findById(id);
        return response.status(200).json(posts);
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

// Route for update a user's Post
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.description ||
            !request.body.contact ||
            !request.body.date
        ) {
            return response.status(400).send({
                message: 'Please send all required field: title, description, contact, date'
            })
        }
        const { id } = request.params;
        const result = await userPost.findByIdAndUpdate(id,request.body)

        if(!result){
            return response.status(404).json({message: 'Post not found'})
        }
        return response.status(200).send({message: 'Post updated sucessfully'})
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})
// Route for deleting post
router.delete('/:id',async (request,response)=>{
    try {
        const { id } = request.params
        const result = await userPost.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({message: 'Post not found'})
        }

        return response.status(200).send({message: 'Post deleted sucessfully'})
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

export default router;