import { Request, Response } from "express";
import {Post} from '../models/post'

export const posts = async (req: Request, res: Response) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    
    res.render('posts', {
        data
    })
}

export const comments = async (req: Request, res: Response) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const data = await response.json()


    const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataPost = await responsePost.json()

    
    console.log(req.params.id)
    let postId: number = parseInt(req.params.id as string)

    type event = {
        userId: number,
        id: number,
        title: string,
        body: string
    }

    const post = dataPost.find((event: event) => {
        return event.id === postId
    })

    console.log(post)

    res.render('comments', {
        data,
        post
    })
}

