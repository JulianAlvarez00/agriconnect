import { MessageCircle, UserCircle2, Briefcase, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "Contacta por WhatsApp",
    description: "Inicia la conversación con nuestro bot inteligente"
  },
  {
    icon: UserCircle2,
    title: "Elige tu perfil",
    description: "Indícanos si buscas trabajo o necesitas contratar"
  },
  {
    icon: Briefcase,
    title: "Especifica tus necesidades",
    description: "Describe tu experiencia o el personal que necesitas"
  },
  {
    icon: CheckCircle,
    title: "¡Listo!",
    description: "Te conectamos con las mejores oportunidades del sector agrícola"
  }
];

export function ProcessWizard() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y efectivo para conectar talento rural
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-green-200" />
              )}
              <div className="relative bg-white rounded-lg p-6 shadow-md transform transition hover:scale-105">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}