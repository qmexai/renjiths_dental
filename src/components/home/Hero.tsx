"use client";

import AppointmentForm from "../shared/AppointmentForm";
import FadeIn from "../shared/FadeIn";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative bg-slate-50 pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 text-primary/10 hidden lg:block">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[800px] h-[800px]">
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.2C90.9,-33.3,97.1,-16.6,96.3,-0.5C95.4,15.7,87.5,31.4,76.6,44.5C65.8,57.7,51.9,68.4,36.5,75.1C21.1,81.9,4.2,84.7,-11.9,82C-28,79.2,-43.3,71,-56.3,60.2C-69.3,49.4,-80.1,36.1,-86.3,20.8C-92.5,5.6,-94.1,-11.5,-88.4,-26.8C-82.7,-42,-69.7,-55.3,-54.6,-61.8C-39.6,-68.3,-22.6,-68.1,-6.6,-68.9C9.3,-69.6,28.7,-71.4,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="max-w-2xl text-center flex flex-col items-center lg:items-start lg:text-left z-10">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                                Modern Dental Clinic
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.25} duration={0.6}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                                Professional <span className="text-primary">Dental Care</span> <br className="hidden md:block" /> for a Healthy Smile
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.4} duration={0.6}>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl">
                                Experience world-class dental treatments in a relaxing environment. Our expert team is dedicated to giving you the beautiful, confident smile you deserve.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.55} duration={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a href="#appointment-form" className="inline-flex justify-center items-center h-12 px-8 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 shadow-primary/30">
                                    Book Appointment
                                </a>
                                <a href="tel:+15551234567" className="inline-flex justify-center items-center h-12 px-8 rounded-md bg-white text-slate-700 border border-slate-200 font-medium hover:bg-slate-50 transition shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                    Call Now
                                </a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.7} duration={0.6}>
                            <div className="mt-10 flex items-center space-x-4 text-sm text-slate-500">
                                <div className="flex -space-x-2">
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Patient" />
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Patient" />
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80" alt="Patient" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-800">500+</span> Happy Patients
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Form & Image Content */}
                    <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-none">
                        <FadeIn delay={0.3} direction="left" duration={0.7} fullWidth>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:hidden mb-8 aspect-video">
                                <motion.img
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Modern Dental Clinic"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div id="appointment-form" className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[1.5rem] blur opacity-30"></div>
                                <AppointmentForm />
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
