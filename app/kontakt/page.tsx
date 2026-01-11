import ContactFormLazy from '@/components/ContactFormLazy';
import LazyMap from '@/components/LazyMap';
import { Mail, Phone, MapPin } from '@/components/icons';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <span className="text-[#c5a059] font-medium tracking-widest uppercase text-sm">Kontakt</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a365d] mt-2 mb-6">
              Lassen Sie uns Ihr Projekt realisieren.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Wir beraten Sie gerne unverbindlich. Rufen Sie uns an oder schreiben Sie uns.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-100">
              <div className="bg-white rounded-sm shadow-xl p-8 md:p-10 border-t-4 border-[#c5a059]">
                <ContactFormLazy />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              {/* Info Cards */}
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-sm shadow-sm flex items-start gap-4">
                  <div className="bg-[#1a365d]/5 p-3 rounded-full text-[#1a365d]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a365d] mb-1">Adresse</h3>
                    <p className="text-gray-600">Sihlquai 240<br />8005 Zürich</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-sm shadow-sm flex items-start gap-4">
                  <div className="bg-[#1a365d]/5 p-3 rounded-full text-[#1a365d]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a365d] mb-1">Telefon</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+41442718267" className="text-gray-600 hover:text-[#c5a059] transition-colors">+41 44 271 82 67</a>
                      <a href="tel:+41442731488" className="text-gray-600 hover:text-[#c5a059] transition-colors">+41 44 273 14 88</a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-sm shadow-sm flex items-start gap-4">
                  <div className="bg-[#1a365d]/5 p-3 rounded-full text-[#1a365d]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a365d] mb-1">E-Mail</h3>
                    <a href="mailto:info@malerbachmann.ch" className="text-gray-600 hover:text-[#c5a059] transition-colors">info@malerbachmann.ch</a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-[#1a365d] text-white p-8 rounded-sm shadow-lg">
                <h3 className="font-display text-2xl font-bold mb-6">Öffnungszeiten</h3>
                <div className="space-y-3 font-light">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Montag - Freitag</span>
                    <span>07:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between pt-2 text-[#c5a059]">
                    <span>Wochenende</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </div>

              {/* Map Widget */}
              <LazyMap />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
