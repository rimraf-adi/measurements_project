import express, {Request,Response} from 'express'

const app = express();
app.use(express.json())
app.get('/',(req: Request, res : Response)=>{res.send('server running')})

app.post('/api/v1/sensor1', (req : Request, res : Response)=>{
    const data = req.body;
    res.send(data)

})