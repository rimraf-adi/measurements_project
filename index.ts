import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const filePath = path.join(__dirname, 'sensorData.json');

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server running');
});

app.post('/api/v1/sensor1', (req: Request, res: Response) => {
    const data = req.body;
    console.log(data)
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
