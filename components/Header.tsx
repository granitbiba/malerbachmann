import Link from 'next/link';
import HeaderClient from './HeaderClient';

export default function Header() {
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/service', label: 'Service' },
    { href: '/showroom', label: 'Showroom' },
    { href: '/wer-wir-sind', label: 'Über Uns' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-3">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-2xl tracking-wide text-[#1a365d]"
          >
            MALER BACHMANN
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-medium text-sm uppercase tracking-wider text-gray-700 hover:text-[#c5a059] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu - Client Component */}
          <HeaderClient menuItems={menuItems} />
        </div>
      </nav>
    </header>
  );
}
