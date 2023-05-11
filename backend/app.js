import express from 'express';
import postRoutes from './routes/post.routes.js';

const app = express();

//middlewares 
app.use(express.json());

//routes
app.use(postRoutes);

export default app;