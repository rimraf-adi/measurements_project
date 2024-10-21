"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
    res.status(201).json({ message: 'Data successfully saved', data });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
