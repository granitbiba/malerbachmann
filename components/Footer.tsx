import { Instagram, Facebook, MapPin, Phone, Mail } from '@/components/icons';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-wide">Maler Bachmann</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Ihr vertrauensvoller Partner für hochwertige Malerarbeiten, Fassadenrenovationen und individuelle Farbkonzepte in Zürich seit 1953.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-[#c5a059]">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#c5a059] mt-1 shrink-0" />
                <span>Sihlquai 240<br />8005 Zürich</span>
              </li>
              <li>
                <div className="flex flex-col gap-1">
                  <a href="tel:+41442718267" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-[#c5a059]" />
                    <span>+41 44 271 82 67</span>
                  </a>
                  <a href="tel:+41442731488" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-[#c5a059]" />
                    <span>+41 44 273 14 88</span>
                  </a>
                </div>
              </li>
              <li>
                <a href="mailto:info@malerbachmann.ch" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-[#c5a059]" />
                  <span>info@malerbachmann.ch</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-[#c5a059]">Mehr</h4>
            <div className="flex flex-col gap-2">
              <Link href="/service" className="text-gray-300 hover:text-white transition-colors">Unsere Services</Link>
              <Link href="/wer-wir-sind" className="text-gray-300 hover:text-white transition-colors">Über Uns</Link>
              <Link href="/impressum" className="text-gray-300 hover:text-white transition-colors">Impressum & Datenschutz</Link>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-[#c5a059] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-[#c5a059] transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} Maler Bachmann GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
