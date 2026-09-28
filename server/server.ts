import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;
const clientPath = path.resolve(__dirname, '../client');

// Middleware to parse JSON requests
app.use(express.json());

// Serve the frontend entry page instead of a JSON placeholder
app.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(clientPath, 'main.html'));
});

// Serve static frontend assets and support client-side routing
app.use(express.static(clientPath));

app.get(/^(?!\/api).*/, (_req: Request, res: Response) => {
    res.sendFile(path.join(clientPath, 'main.html'));
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not Found' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
