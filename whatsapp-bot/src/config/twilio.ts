// src/config/twilio.ts
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Agregar logs para debug
console.log('Verificando credenciales Twilio:');
console.log('Account SID:', accountSid?.substring(0, 8) + '...');
console.log('Auth Token existe:', !!authToken);

if (!accountSid || !authToken) {
    throw new Error('Faltan credenciales de Twilio en las variables de entorno');
}

const client = twilio(accountSid, authToken);
const twilioNumber = `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`;

console.log('Cliente Twilio inicializado');
console.log('Número de WhatsApp:', twilioNumber);

export { client, twilioNumber };