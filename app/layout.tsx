import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maler Bachmann | Exzellentes Handwerk seit 1953",
  description: "Maler Bachmann - Ihr Malergeschäft im Herzen von Zürich. Seit 1953 in dritter Generation. Professionelle Malerarbeiten, Fassadenreinigung, Graffitischutz und mehr.",
  other: {
    'format-detection': 'telephone=no',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="preload" href="/images/hero-painter-tiny.webp" as="image" fetchpriority="high" />
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>
      <body className="antialiased text-gray-900 bg-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
