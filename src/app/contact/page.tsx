import ContactForm from "@/components/Contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Photography Portfolio",
    description: "Get in touch for collaborations.",
};

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto py-12 animate-fade-in-up">
            <h1 className="text-4xl font-light text-center mb-8">Get in Touch</h1>
            <p className="text-gray-500 text-center mb-12 font-light">
                Interested in collaborations, prints, or just want to say hello? <br className="hidden sm:block" />
                Fill out the form below and I will get back to you as soon as possible.
            </p>
            <ContactForm />
        </div>
    );
}
