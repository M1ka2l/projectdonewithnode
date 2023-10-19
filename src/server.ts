import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import path from 'path'
import router from './routes/routes'
import mustache from 'mustache-express'

dotenv.config()
const server = express()

server.use(express.urlencoded({extended: true}))

server.set("view engine", "mustache")
server.set("views", path.join(__dirname, "view"))
server.engine("mustache", mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(router)


server.use((req: Request, res: Response) => {
    res.status(400)

    res.json({result: 'not found'})
})



server.listen(process.env.PORT)