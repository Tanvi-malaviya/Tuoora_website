'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Hello! I am your Tuoora AI Assistant. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const chatEndRef = useRef(null);

    const quickQuestions = [
        "What are the core features?",
        "How much does it cost?",
        "Can I book a free demo?",
        "Is there a mobile app?"
    ];

    // Scroll to bottom of chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isChatOpen]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Listen for custom event to open chat from other components
    useEffect(() => {
        const handleOpenChat = () => setIsChatOpen(true);
        window.addEventListener('open-chatbot', handleOpenChat);
        return () => window.removeEventListener('open-chatbot', handleOpenChat);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('price') || lowerInput.includes('cost')) {
            return "Tuoora ERP offers flexible, high-density pricing for institutions of all sizes. Check our Pricing page for a detailed breakdown or I can arrange a custom quote!";
        } else if (lowerInput.includes('demo') || lowerInput.includes('trial') || lowerInput.includes('book')) {
            return "You can book a live demo instantly! Just click the 'Book Demo' button at the top, or leave your contact details here and I'll notify our team.";
        } else if (lowerInput.includes('feature') || lowerInput.includes('whatsapp') || lowerInput.includes('student')) {
            return "Our platform includes Automated WhatsApp fee alerts, Biometric attendance, Exam marks tracking, and a powerful Student Core. What would you like to know more about?";
        } else if (lowerInput.includes('mobile') || lowerInput.includes('app') || lowerInput.includes('feeeasy')) {
            return "Yes! Our FeeEasy app is available for both parents and students, providing real-time updates, online payments, and digital homework journals.";
        }
        return "That's a great question. I'll have a human specialist look into that for you. Is there anything else you'd like to ask?";
    };

    const handleSendMessage = (text) => {
        if (!text.trim()) return;

        const userMessage = { role: 'user', text: text };
        setMessages(prev => [...prev, userMessage]);
        
        if (inputValue === text) setInputValue('');

        // Simulate Bot Response
        setTimeout(() => {
            const responseText = getBotResponse(text);
            setMessages(prev => [...prev, { role: 'bot', text: responseText }]);
        }, 800);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(inputValue);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            {/* Chatbot Window */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-[320px] sm:w-[380px] max-h-[70vh] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col mb-2"
                    >
                        {/* Chat Header */}
                        <div className="p-5 bg-navy text-white flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center relative">
                                    <span className="text-lg">🤖</span>
                                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 border-2 border-navy rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-tight">AI Assistant</h4>
                                    <p className="text-[9px] text-white/40 font-black uppercase tracking-[0.2em]">Always Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/30 scrollbar-hide">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-[11px] font-medium leading-relaxed ${
                                        msg.role === 'user' 
                                            ? 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10' 
                                            : 'bg-white text-navy border border-gray-100 rounded-tl-none shadow-sm'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            
                            {/* Quick Questions Display */}
                            {messages.length === 1 && (
                                <div className="pt-2 flex flex-wrap gap-2">
                                    {quickQuestions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSendMessage(q)}
                                            className="px-3 py-2 bg-white border border-gray-100 rounded-xl text-[10px] font-bold text-navy hover:border-primary hover:text-white hover:bg-primary transition-all text-left shadow-sm"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Chat Input */}
                        <form onSubmit={handleFormSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-2 shrink-0">
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask a question..." 
                                className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-[11px] font-medium focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-gray-400"
                            />
                            <button type="submit" className="w-10 h-10 flex items-center justify-center bg-navy text-white rounded-xl hover:bg-primary transition-all shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col gap-3 items-end">
                {/* Scroll to Top Button */}
                <AnimatePresence>
                    {isVisible && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={scrollToTop}
                            className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 text-navy rounded-2xl shadow-xl hover:bg-gray-50 hover:shadow-2xl transition-all group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform">
                                <path d="m18 15-6-6-6 6"/>
                            </svg>
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Main Chatbot Button */}
                {/* <motion.button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl shadow-xl shadow-navy/10 transition-all relative group ${isChatOpen ? 'bg-primary text-white' : 'bg-navy text-white'}`}
                >
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    {isChatOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
                        </svg>
                    )}
                </motion.button> */}

                {/* WhatsApp Button */}
              <motion.a

href="https://wa.me/919104081291?text=Hello%20Tuoora%20Team,%20I'm%20interested%20in%20learning%20more%20about%20the%20ERP."

target="_blank"

rel="noopener noreferrer"

whileHover={{
scale:1.08,
y:-4
}}

whileTap={{
scale:.95
}}

className="
w-12
h-12
flex
items-center
justify-center
bg-[#25D366]
text-white
rounded-2xl
shadow-xl
shadow-green-500/20
transition-all
"

>

<FaWhatsapp
size={26}
/>


</motion.a>
            </div>
        </div>
    );
}
