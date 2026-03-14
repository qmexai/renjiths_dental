"use client";

import { useState } from "react";
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset form (in a real app)
        }, 1500);
    };

    return (
        <AnimatePresence mode="wait">
            {isSuccess ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center flex flex-col items-center justify-center space-y-4 shadow-sm h-full min-h-[400px]"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-2"
                    >
                        <Send className="h-8 w-8 ml-1" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                    <p className="text-slate-600 max-w-sm mx-auto">
                        Thank you for reaching out. A member of our team will get back to you as soon as possible.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition shadow-sm"
                    >
                        Send Another Message
                    </motion.button>
                </motion.div>
            ) : (
                <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white rounded-xl shadow-xl p-6 sm:p-8"
                >
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-slate-800">General Enquiry</h3>
                        <p className="text-slate-500 mt-1 text-sm">Have a question? Send us a message and we'll be happy to help.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="relative group">
                            <label htmlFor="enquiry-name" className="sr-only">Full Name</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                                <User className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                id="enquiry-name"
                                required
                                className="pl-10 w-full rounded-md border border-slate-300 py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="space-y-4 sm:flex sm:space-y-0 sm:gap-4">
                            <div className="w-full relative group">
                                <label htmlFor="enquiry-email" className="sr-only">Email Address</label>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="enquiry-email"
                                    required
                                    className="pl-10 w-full rounded-md border border-slate-300 py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="w-full relative group">
                                <label htmlFor="enquiry-phone" className="sr-only">Phone Number</label>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                                    <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="enquiry-phone"
                                    required
                                    className="pl-10 w-full rounded-md border border-slate-300 py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        <div className="w-full relative group">
                            <label htmlFor="enquiry-subject" className="sr-only">Subject</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                                <MessageSquare className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                id="enquiry-subject"
                                required
                                className="pl-10 w-full rounded-md border border-slate-300 py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="Subject"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="enquiry-message" className="sr-only">Message</label>
                            <textarea
                                name="message"
                                id="enquiry-message"
                                rows={5}
                                required
                                className="w-full rounded-md border border-slate-300 py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-md transition-shadow hover:shadow-lg shadow-slate-900/30 flex justify-center items-center h-12"
                        >
                            {isSubmitting ? (
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <Send className="h-5 w-5 mr-2" />
                                    Send Enquiry
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
