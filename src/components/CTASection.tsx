import { MessageCircle } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export function CTASection() {
  return (
    <section className="bg-green-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          ¿Listo para encontrar la oportunidad perfecta?
        </h2>
        <p className="text-green-100 mb-10 text-lg">
          Ya sea que busques trabajo en el campo o necesites personal calificado, estamos aquí para ayudarte
        </p>
        <WhatsAppButton variant="light">
          <MessageCircle className="mr-2" />
          Contactar por WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}