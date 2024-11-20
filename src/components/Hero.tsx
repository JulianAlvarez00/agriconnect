import { MessageCircle, ChevronRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
          alt="Campo de trigo"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Conectamos el <span className="text-green-600">Talento Rural</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            La plataforma que une a trabajadores agrícolas calificados con propietarios de campos en toda Argentina
          </p>
          <WhatsAppButton variant="primary">
            <MessageCircle className="mr-2" />
            Comenzar ahora
            <ChevronRight className="ml-2" />
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}