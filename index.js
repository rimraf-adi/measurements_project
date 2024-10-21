"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
const filePath = path_1.default.join(__dirname, 'sensorData.json');
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Server running');
});
app.post('/api/v1/sensor1', (req, res) => {
    const data = req.body;
    fs_1.default.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error writing data to file', error: err });
        }
        res.status(201).json({ message: 'Data successfully saved', data });
    });
});
app.get('/api/v1/sensor1', (req, res) => {
    fs_1.default.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data from file', error: err });
        }
        if (!data) {
            return res.status(404).json({ message: 'No data found' });
        }
        res.send(data);
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
