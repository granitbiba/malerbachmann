'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from '@/components/icons';

interface HeaderClientProps {
  menuItems: Array<{ href: string; label: string }>;
}

export default function HeaderClient({ menuItems }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <details className="md:hidden">
        <summary className="list-none p-2 text-gray-800 cursor-pointer">
          <Menu size={28} />
        </summary>
        <div className="md:hidden overflow-hidden bg-white mt-4 border-t border-gray-100 absolute left-0 right-0 top-full shadow-lg">
          <ul className="flex flex-col space-y-4 py-6 container mx-auto px-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-[#1a365d] hover:text-[#c5a059] transition-colors font-display text-xl font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </>
  );
}
