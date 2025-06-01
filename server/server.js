import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import bodyParser from 'body-parser'


//Initialize express
const app = express()

//connect to database
await connectDB()


//MiddleWares
app.use(cors())


//Routes

app.get('/', (req,res)=> res.send("API IS WORKING"))
//app.post('/clerk',express.json(), clerkWebhooks)
app.post('/clerk', bodyParser.raw({ type: 'application/json' }), clerkWebhooks)


//port

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})