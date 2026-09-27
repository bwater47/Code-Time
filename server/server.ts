import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

//Sample Route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello, World!' });
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
