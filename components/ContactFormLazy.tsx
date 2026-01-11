'use client';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => (
    <div className="bg-white rounded-sm shadow-lg p-6 md:p-8">
      <div className="animate-pulse space-y-6">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
    </div>
  ),
  ssr: false,
});

export default ContactForm;
