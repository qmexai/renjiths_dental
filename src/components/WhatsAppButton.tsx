import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    // Replace with actual WhatsApp number
    const phoneNumber = "15551234567";
    const message = "Hello! I would like to book an appointment or ask a question.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 group"
            aria-label="Chat with us on WhatsApp"
        >
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
            <MessageCircle className="h-7 w-7 relative z-10" />
        </a>
    );
}
