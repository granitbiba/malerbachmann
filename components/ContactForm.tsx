'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from '@/components/icons';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-sm shadow-lg p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name ist erforderlich' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'E-Mail ist erforderlich',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ungültige E-Mail-Adresse',
              },
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="ihre@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all"
            placeholder="+41 XX XXX XX XX"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mitteilung <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Mitteilung ist erforderlich' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-all resize-none"
            placeholder="Ihre Nachricht..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1a365d] text-white py-3 px-6 rounded-sm font-medium hover:bg-[#112240] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md active:scale-95"
        >
          {isSubmitting ? (
            'Wird gesendet...'
          ) : (
            <>
              Absenden
              <Send size={18} />
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <p className="text-green-600 text-center animate-fade-in">
            Nachricht erfolgreich gesendet!
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center animate-fade-in">
            Fehler beim Senden. Bitte versuchen Sie es erneut.
          </p>
        )}
      </form>
    </div>
  );
}
