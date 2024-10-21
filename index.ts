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

    fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error writing data to file', error: err });
        }
        res.status(201).json({ message: 'Data successfully saved', data });
    });
});

app.get('/api/v1/sensor1', (req: Request, res: Response) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data from file', error: err });
        }

        if (!data) {
            return res.status(404).json({ message: 'No data found' });
        }

        res.status(200).json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
