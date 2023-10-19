import {Router} from 'express'
import * as main from '../controller/main'
import { addcomments } from '../controller/addcomments'


const router = Router()

router.get('/posts', main.posts)
router.get('/posts/:id/comments', main.comments)
router.post('/posts/:id/comments', addcomments)
export default router