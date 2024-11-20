import { Request, Response } from 'express';
import { client, twilioNumber } from '../config/twilio';

// Función para iniciar el chat
export const startChat = async (req: Request, res: Response) => {
    try {
        const { phoneNumber } = req.body;
        console.log('Iniciando chat con:', phoneNumber);
        
        const formattedNumber = `whatsapp:+${phoneNumber.replace(/\D/g, '')}`;
        console.log('Número formateado:', formattedNumber);

        const message = await client.messages.create({
            body: '¡Bienvenido! 🌟\n\n' +
                  'Gracias por contactarnos. ¿En qué podemos ayudarte hoy?\n\n' +
                  '1. Consultar oportunidades\n' +
                  '2. Publicar trabajo\n' +
                  '3. Hablar con un asesor',
            from: twilioNumber,
            to: formattedNumber
        });

        console.log('Mensaje enviado exitosamente:', message.sid);
        
        res.status(200).json({ 
            success: true, 
            messageId: message.sid 
        });
    } catch (error: any) {
        console.error('Error al enviar mensaje:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message,
            details: error.code 
        });
    }
};

// Función para manejar mensajes entrantes
export const handleIncomingMessage = async (req: Request, res: Response) => {
    try {
        const { Body = '', From } = req.body;
        console.log('Mensaje recibido:', { Body, From });

        let response = '';
        switch(Body.toLowerCase()) {
            case '1':
                response = '🌟 *Oportunidades Disponibles*\n\n' +
                          'Tenemos varias posiciones abiertas. ¿En qué área te gustaría trabajar?\n\n' +
                          'A. Campo\n' +
                          'B. Logística\n' +
                          'C. Administración';
                break;
            case '2':
                response = '📝 *Publicar Trabajo*\n\n' +
                          'Nos alegra que quieras publicar una posición. ' +
                          'Un asesor se pondrá en contacto contigo pronto para ayudarte con el proceso.';
                break;
            case '3':
                response = '👋 *Contacto con Asesor*\n\n' +
                          'Un asesor se pondrá en contacto contigo en breve. ' +
                          'Nuestro horario de atención es de Lunes a Viernes de 9:00 a 18:00.';
                break;
            default:
                response = '¡Hola! 👋 ¿Cómo podemos ayudarte?\n\n' +
                          '1. Consultar oportunidades\n' +
                          '2. Publicar trabajo\n' +
                          '3. Hablar con un asesor';
        }

        await client.messages.create({
            body: response,
            from: twilioNumber,
            to: From
        });

        res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Error al procesar mensaje:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
};