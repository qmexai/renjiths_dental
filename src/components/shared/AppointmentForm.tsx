"use client";

import { useState } from "react";
import { Calendar, Phone, Mail, User, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppointmentForm() {
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
                    className="bg-green-50 border border-green-200 rounded-xl p-8 text-center flex flex-col items-center justify-center space-y-4 shadow-sm h-full min-h-[400px]"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    >
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-green-800">Appointment Requested!</h3>
                    <p className="text-green-700 max-w-sm">
                        Thank you for choosing SmileCare. Our team will contact you shortly to confirm your appointment details.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSuccess(false)}
                        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition shadow-sm"
                    >
                        Book Another
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
                        <h3 className="text-2xl font-bold text-slate-800">Book an Appointment</h3>
                        <p className="text-slate-500 mt-1 text-sm">Fill out the form below and we will get back to you soon.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:gap-4">
                            <div className="w-full relative group">
                                <label htmlFor="name" className="sr-only">Full Name</label>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="pl-10 w-full rounded-md border border-slate-300 py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="w-full relative group">
                                <label htmlFor="phone" className="sr-only">Phone Number</label>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                                    <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    className="pl-10 w-full rounded-md border border-slate-300 py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        <div className="space-y-4 sm:flex sm:space-y-0 sm:gap-4">
                            <div className="w-full relative group">
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="pl-10 w-full rounded-md border border-slate-300 py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="w-full relative group">
                                <label htmlFor="date" className="sr-only">Preferred Date</label>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                                    <Calendar className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
                                </div>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    required
                                    className="pl-10 w-full rounded-md border border-slate-300 py-2.5 px-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label htmlFor="service" className="sr-only">Select Service</label>
                            <select
                                name="service"
                                id="service"
                                required
                                className="w-full text-slate-600 rounded-md border border-slate-300 py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white"
                                defaultValue=""
                            >
                                <option value="" disabled>Select a Service</option>
                                <option value="General Checkup">General Checkup</option>
                                <option value="Teeth Cleaning">Teeth Cleaning</option>
                                <option value="Root Canal Treatment">Root Canal Treatment</option>
                                <option value="Dental Implants">Dental Implants</option>
                                <option value="Teeth Whitening">Teeth Whitening</option>
                                <option value="Braces & Aligners">Braces & Aligners</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label htmlFor="message" className="sr-only">Message (optional)</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={3}
                                className="w-full rounded-md border border-slate-300 py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Message (optional)"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition-shadow hover:shadow-lg shadow-primary/30 flex justify-center items-center h-12"
                        >
                            {isSubmitting ? (
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                "Book Appointment"
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
