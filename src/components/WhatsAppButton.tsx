// src/components/WhatsAppButton.tsx
import { ButtonHTMLAttributes } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'light';
}

export function WhatsAppButton({ children, variant = 'primary', ...props }: WhatsAppButtonProps) {
  const handleWhatsAppClick = async () => {
    try {
      console.log('Iniciando petición al backend...');
      
      const response = await fetch('http://localhost:3001/api/whatsapp/start-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          phoneNumber: '5491136260707'
        }),
      });

      const data = await response.json();
      console.log('Respuesta del backend:', data);

      if (response.ok) {
        console.log('Chat iniciado correctamente');
        // Solo abrimos WhatsApp si la petición al backend fue exitosa
        window.open(
          `https://wa.me/14155238886?text=Hola,%20me%20interesa%20saber%20más%20sobre%20la%20plataforma`,
          '_blank'
        );
      } else {
        console.error('Error en la respuesta:', data);
      }
    } catch (error) {
      console.error('Error al contactar el backend:', error);
    }
  };

  const baseStyles = "inline-flex items-center px-8 py-4 font-semibold rounded-lg shadow-lg transform transition hover:scale-105";
  const variantStyles = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    light: "bg-white text-green-600 hover:bg-green-50"
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default WhatsAppButton;