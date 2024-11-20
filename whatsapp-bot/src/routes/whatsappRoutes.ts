import express from 'express';
import { handleIncomingMessage, startChat } from '../controllers/whatsappController';

const router = express.Router();

// Ruta para iniciar el chat
router.post('/start-chat', startChat);

// Ruta para el webhook de Twilio
router.post('/webhook', handleIncomingMessage);

export default router;