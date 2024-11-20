// whatsapp-bot/src/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import whatsappRoutes from './routes/whatsappRoutes';

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors({
    origin: '*', // En producción, especifica los dominios permitidos
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'WhatsApp Bot API is running!' });
});

// Rutas de WhatsApp
app.use('/api/whatsapp', whatsappRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;