


import { Calendar, Palette, Lightbulb, Users } from '@/components/icons';
import Link from 'next/link';
import Image from 'next/image';

export default function ShowroomPage() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop', // Modern Living Room
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop', // Minimalist Interior
    'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=800&auto=format&fit=crop', // Painter applying masking tape (Precision)
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop', // Bright Room
    'https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=800&auto=format&fit=crop', // Freshly painted bright room (Result)
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop'   // User provided Modern Living Room
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
            alt="Showroom interior"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#1a365d]/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Showroom.</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Lassen Sie sich inspirieren. Erleben Sie Farben und Texturen.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-3xl font-display font-bold text-[#1a365d]">Ihr persönlicher Beratungstermin</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bei uns haben Sie die Möglichkeit, innerhalb eines kostenlosen Vor-Ort-Termins
            gemeinsam mit dem Inhaber Ihr Vorhaben zu besprechen. Wir beraten Sie hinsichtlich
            Ausführung, Design und Farbgestaltung. Unser Erfahrungsspektrum reicht von klassisch bis modern,
            einfach schlicht oder eine individuelle Farbgestaltung.
          </p>
          <div className="pt-4">
            <Link href="/kontakt" className="inline-block bg-[#1a365d] text-white px-8 py-3 rounded-sm font-semibold hover:bg-[#112240] transition-colors">
              Termin vereinbaren
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-4 mb-24">
          {[
            { icon: Calendar, title: 'Kostenlose Beratung', text: 'Persönlich mit Inhaber' },
            { icon: Palette, title: 'Farbgestaltung', text: 'Klassisch bis Modern' },
            { icon: Lightbulb, title: 'Design-Lösungen', text: 'Individuell für Ihre Räume' },
            { icon: Users, title: 'Service', text: 'Kompetent & Termingetreu' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-sm text-center hover:-translate-y-1 transition-transform duration-300 border border-gray-100 shadow-sm">
              <item.icon className="w-10 h-10 mx-auto text-[#c5a059] mb-4" />
              <h3 className="font-bold text-[#1a365d] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="space-y-8">
          <h3 className="text-2xl font-display font-bold text-[#1a365d] text-center mb-8">Impressionen unserer Arbeit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-72 rounded-sm overflow-hidden shadow-md group"
              >
                <Image
                  src={img}
                  alt={`Showroom Impression ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#1a365d]/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <p className="text-gray-500 italic">Mehr Referenzen zeigen wir Ihnen gerne bei einem persönlichen Gespräch.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
