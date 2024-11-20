import { ButtonHTMLAttributes } from 'react';

interface WhatsAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'light';
}

export function WhatsAppButton({ children, variant = 'primary', ...props }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5491136260707?text=Hola,%20me%20interesa%20saber%20más%20sobre%20la%20plataforma', '_blank');
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