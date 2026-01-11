


import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1599692994437-3fd9eb9ba2d8?q=80&w=2070&auto=format&fit=crop"
            alt="About Maler Bachmann"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#1a365d]/80"></div>
        <div className="relative z-10 text-center text-white p-4">
          <h1
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Wer wir sind.
          </h1>
          <p
            className="text-xl text-gray-200 max-w-2xl mx-auto font-light"
          >
            Eine Familiengeschichte, geprägt von Leidenschaft für Farbe und Qualität.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto space-y-32">

          {/* Generation 1 */}
          <div
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="text-[#c5a059] font-display font-bold text-6xl md:text-8xl opacity-80 border-b-4 border-[#1a365d]">
                1952
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6 border-l-0 md:border-l-2 border-gray-100 md:pl-12">
              <h2 className="text-4xl font-display font-bold text-[#1a365d]">Die Gründung.</h2>
              <h3 className="text-xl text-[#c5a059] font-medium">Fritz Bachmann</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Unser Malergeschäft wurde 1952 von Fritz Bachmann gegründet.
                Mit unermüdlicher Schaffensfreude hat er die Firma aufgebaut und legte stets selbst Hand an.
                Seine lebensfrohe Art war ansteckend, und das Malergeschäft war seine absolute Passion.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Qualität und Einhaltung der Termine war für Fritz Bachmann Ehrensache. Er legte den Grundstein für den exzellenten Ruf, den wir heute genießen.
              </p>
            </div>
          </div>

          {/* Generation 2 */}
          <div
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/3 flex justify-center md:justify-end md:order-last">
              <div className="text-[#c5a059] font-display font-bold text-6xl md:text-8xl opacity-80 border-b-4 border-[#1a365d]">
                2007
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6 md:text-right border-r-0 md:border-r-2 border-gray-100 md:pr-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-[#1a365d]">Die Weiterführung.</h2>
                <h3 className="text-xl text-[#c5a059] font-medium">Evelyne Bachmann</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg md:ml-auto">
                Seine Tochter Evelyne war Fritz’ rechte Hand,
                bis Fritz 2007 verstarb. Seitdem führt Evelyne Maler Bachmann mit den langjährigen Mitarbeitern weiter
                und bewahrt die Werte, die ihr Vater etabliert hat.
              </p>
            </div>
          </div>

          {/* Generation 3 */}
          <div
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="text-[#c5a059] font-display font-bold text-6xl md:text-8xl opacity-80 border-b-4 border-[#1a365d]">
                2016
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6 border-l-0 md:border-l-2 border-gray-100 md:pl-12">
              <h2 className="text-4xl font-display font-bold text-[#1a365d]">Die Zukunft.</h2>
              <h3 className="text-xl text-[#c5a059] font-medium">Aurel Bachmann</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nach Abschluss seiner Malerlehre und einem Kunststudium arbeitet nun auch Evelynes Sohn
                Aurel seit 2016 im Familienbetrieb.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Er bringt nicht nur frischen Wind, sondern kann auch auf sein fundiertes Wissen in speziellen
                Mal-Techniken zurückgreifen. Aurel kümmert sich mittlerweile auch vermehrt um die geschäftlichen
                Angelegenheiten und führt die Tradition in die dritte Generation.
              </p>
            </div>
          </div>

          <div className="bg-[#1a365d] text-white p-12 rounded-sm text-center shadow-xl">
            <p className="text-2xl font-display italic font-light mb-8">
              "Rufen Sie uns an, wir beraten Sie gerne und kompetent."
            </p>
            <button className="bg-[#c5a059] text-white px-8 py-3 rounded-sm font-semibold hover:bg-[#b08d4b] transition-colors">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
