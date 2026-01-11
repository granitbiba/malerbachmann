


import {
  Paintbrush,
  Warehouse,
  SprayCan,
  Building2,
  ShieldCheck,
  FileText,
  Wrench,
} from '@/components/icons';
import Image from 'next/image';

const services = [
  {
    icon: Paintbrush,
    title: 'Applikation von Farbe und Lacken',
    description: 'Fachgerechte Anstriche für Innen- und Außenbereiche mit hochwertigen Farben.',
    image: '/images/service-detail.jpg'
  },
  {
    icon: FileText,
    title: 'Aufziehen von Tapeten und Gewebe',
    description: 'Professionelle Tapezierarbeiten für individuelle Raumgestaltung.',
    image: '/images/service-wallpaper.jpg'
  },
  {
    icon: Wrench,
    title: 'Applikation von Aufzieh- und Spritzputzen',
    description: 'Strukturierte Oberflächen für ein modernes Wohnambiente.',
    image: '/images/service-plaster.jpg'
  },
  {
    icon: Warehouse,
    title: 'Spritzen in der Werkstatt',
    description: 'Hochwertige Lackierungen von Möbeln, Türen und Fensterläden in unserem Spritzwerk.',
    image: '/images/service-workshop.jpg'
  },
  {
    icon: Building2,
    title: 'Fassadenreinigung & Renovation',
    description: 'Neuanstriche, Spritzarbeiten und Netzsanierungen für langlebige Fassaden.',
    image: '/images/service-facade.jpg'
  },
  {
    icon: ShieldCheck,
    title: 'Graffiti entfernen und Graffitischutz',
    description: 'Schonende Entfernung und nachhaltiger Schutz vor Vandalismus.',
    image: '/images/graffiti-entfernen-und-graffitischutz.jpg'
  },
  {
    icon: SprayCan,
    title: 'Bodenbeschriftungen & Bodenanstriche',
    description: 'Robuste Markierungen und Versiegelungen für Industrieböden und Parkplätze.',
    image: '/images/floor-marking.jpg'
  },
  {
    icon: Paintbrush,
    title: 'Schablonieren',
    description: 'Künstlerische Wandgestaltung und dekorative Maltechniken.',
    // BACKUP: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop'
    image: '/images/schablonieren.jpg'
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Service Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#1a365d]">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
            alt="Service Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] to-transparent z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Unsere Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Meisterhaftes Handwerk für jeden Anspruch. Wir realisieren Ihre Visionen.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:gap-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-sm shadow-xl relative h-64 md:h-96 group">
                  <div className="absolute inset-0 bg-[#1a365d]/10 group-hover:bg-transparent transition-colors z-10"></div>
                  {service.image.startsWith('/') ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-flex items-center justify-center p-3 bg-[#1a365d]/5 rounded-full text-[#c5a059] mb-2">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-[#1a365d]">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-2">
                    <button className="text-[#1a365d] font-semibold border-b-2 border-[#c5a059] pb-1 hover:text-[#c5a059] transition-colors">
                      Mehr erfahren
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
