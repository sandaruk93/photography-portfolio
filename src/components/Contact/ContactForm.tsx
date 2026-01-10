'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('LOADING');

        // REPLACE 'YOUR_FORMSPREE_ID' below with the ID you get from https://formspree.io/create
        const formId = 'mreezklw';
        const action = `https://formspree.io/f/${formId}`;

        try {
            const formData = new FormData(e.currentTarget);
            const res = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (res.ok) {
                setStatus('SUCCESS');
            } else {
                // Since user hasn't provided ID, we simulate error or success? 
                // Better to fail to alert them to configure it.
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    };

    if (status === 'SUCCESS') {
        return (
            <div className="text-center p-8 bg-gray-50 rounded-lg animate-fade-in-up">
                <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. Ill get back to you soon.</p>
                <button
                    onClick={() => setStatus('IDLE')}
                    className="mt-4 text-sm text-black underline hover:text-gray-600"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:ring-1 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-300"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:ring-1 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-300"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    required
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:ring-1 focus:ring-black focus:border-black outline-none transition-all resize-none placeholder:text-gray-300"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'LOADING'}
                className="w-full bg-black text-white py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'LOADING' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'ERROR' && (
                <div className="p-4 bg-red-50 text-red-600 text-sm rounded-sm text-center">
                    <p className="font-medium">Form Not Configured</p>
                    <p className="text-xs mt-1">
                        You need to add your Formspree ID in <code>src/components/Contact/ContactForm.tsx</code>.
                        <br />
                        <a href="https://formspree.io/create" target="_blank" className="underline">Get one here</a>.
                    </p>
                </div>
            )}
        </form>
    );
}
