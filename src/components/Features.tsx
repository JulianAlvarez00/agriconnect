import { Users, Tractor, Leaf } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Conexión Directa",
    description: "Conectamos trabajadores rurales con propietarios de campos de manera inmediata"
  },
  {
    icon: Tractor,
    title: "Experiencia Verificada",
    description: "Personal calificado con experiencia comprobable en el sector agrícola"
  },
  {
    icon: Leaf,
    title: "Crecimiento Rural",
    description: "Impulsamos el desarrollo del campo argentino facilitando el acceso al talento"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}