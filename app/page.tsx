import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Paintbrush, ShieldCheck, SprayCan } from '@/components/icons';

export default function Home() {

  const services = [
    {
      title: 'Innenanstriche',
      description: 'Präzise Malerarbeiten für Wohn- und Geschäftsräume mit hochwertigen Materialien.',
      icon: Paintbrush
    },
    {
      title: 'Fassadenrenovation',
      description: 'Nachhaltiger Schutz und ästhetische Aufwertung Ihrer Liegenschaft.',
      icon: ShieldCheck
    },
    {
      title: 'Spritzwerk',
      description: 'Perfekte Oberflächenveredelung für Möbel, Türen und Fensterläden.',
      icon: SprayCan
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a365d] text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero-painter-tiny.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={50}
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/90 to-[#1a365d]/70 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <span className="inline-block text-[#c5a059] font-medium tracking-widest uppercase text-sm md:text-base mb-4 animate-fade-in-up">
              Malergeschäft Zürich | Seit 1952
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up animation-delay-100">
              Exzellenz in <br />
              <span className="text-white">Farbe und Form.</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up animation-delay-200">
              Traditionelles Handwerk trifft auf moderne Ästhetik. Ihr Partner für anspruchsvolle Malerarbeiten im Großraum Zürich.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 pt-8 animate-fade-in-up animation-delay-300">
              <Link
                href="/kontakt"
                className="group relative inline-flex items-center gap-3 bg-[#c5a059] text-white px-10 py-4 rounded-sm font-semibold hover:bg-[#b08d4b] transition-all tracking-wide overflow-hidden"
              >
                <span className="relative z-10">Offerte anfordern</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/showroom"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-10 py-4 rounded-sm font-semibold hover:bg-white/10 transition-all tracking-wide"
              >
                Unsere Arbeiten ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Introduction Grid */}
      <section className="py-24 bg-white" style={{ contentVisibility: 'auto' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: 'Qualität ohne Kompromisse', text: 'Wir verwenden ausschließlich Premium-Materialien namhafter Hersteller.' },
              { title: 'Meisterhafte Ausführung', text: 'Unser Team besteht aus qualifizierten Fachkräften mit langjähriger Erfahrung.' },
              { title: 'Termin- & Kostentreue', text: 'Verlässlichkeit ist unser Versprechen. Wir halten Wort.' }
            ].map((feature, idx) => (
              <div key={idx} className="space-y-4 p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-[#1a365d]/5 flex items-center justify-center rounded-full text-[#1a365d]">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#1a365d]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family History Summary */}
      <section className="py-24 bg-[#1a365d] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-[#c5a059] font-medium tracking-widest uppercase">Unsere Geschichte</span>
              <h2 className="font-display text-4xl font-bold">Drei Generationen,<br />eine Leidenschaft.</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Gegründet 1952 von Fritz Bachmann, steht unser Name seit über 70 Jahren für Qualität und Zuverlässigkeit in Zürich. Was mit einem Einmannbetrieb begann, wird heute mit Stolz von Evelyne und Aurel Bachmann in die Zukunft geführt.
              </p>
              <div className="pt-4">
                <Link href="/wer-wir-sind" className="text-[#c5a059] hover:text-white transition-colors font-semibold inline-flex items-center gap-2">
                  Ganze Geschichte lesen <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 border-2 border-[#c5a059]/30 rounded-full opacity-50"></div>
              {/* Family history image */}
              <div className="aspect-square rounded-full overflow-hidden relative group">
                <Image
                  src="/images/family-history-centered.webp"
                  alt="Maler Bachmann craftsmanship and tradition"
                  fill
                  className="object-cover object-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a365d]">Unsere Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ein breites Spektrum an Dienstleistungen für höchste Ansprüche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link
                href="/service"
                key={idx}
                className="group bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <service.icon className="w-12 h-12 text-[#c5a059] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl font-bold text-[#1a365d] mb-4 group-hover:text-[#c5a059] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#1a365d] font-semibold group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a365d]">
              Bereit für Ihren neuen Anstrich?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Lassen Sie uns gemeinsam Ihr Projekt realisieren. Kontaktieren Sie uns für eine unverbindliche Beratung und Offerte.
            </p>
            <div className="pt-8">
              <Link
                href="/kontakt"
                className="inline-block bg-[#c5a059] text-white px-12 py-5 rounded-sm font-bold text-lg hover:bg-[#b08d4b] transition-colors shadow-lg"
              >
                Jetzt Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
