"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Syringe, Activity, ShieldPlus, Smile, HeartPulse } from "lucide-react";
import FadeIn from "../shared/FadeIn";

const services = [
    {
        title: "Teeth Cleaning",
        description: "Professional cleaning to remove plaque, tartar, and prevent gum disease for a healthier smile.",
        icon: Sparkles,
    },
    {
        title: "Root Canal Treatment",
        description: "Painless root canal therapy to save infected teeth and restore your dental health.",
        icon: Activity,
    },
    {
        title: "Teeth Whitening",
        description: "Advanced whitening procedures to brighten your smile safely and effectively.",
        icon: Smile,
    },
    {
        title: "Dental Implants",
        description: "Permanent and natural-looking tooth replacements to restore your smile and confidence.",
        icon: Syringe,
    },
    {
        title: "Braces & Aligners",
        description: "Orthodontic solutions including clear aligners to straighten teeth discreetly.",
        icon: ShieldPlus,
    },
    {
        title: "Cosmetic Dentistry",
        description: "Veneers, bonding, and smile makeovers designed to enhance your appearance.",
        icon: HeartPulse,
    },
];

export default function ServicesPreview() {
    return (
        <section className="py-20 bg-slate-50" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn delay={0.1}>
                        <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Comprehensive Dental Services
                        </h3>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-slate-600">
                            We offer a wide range of dental treatments using the latest technology to ensure your smile remains healthy and beautiful.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="up">
                            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                                <p className="text-slate-600 mb-6">{service.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5} direction="up">
                    <div className="text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition group"
                        >
                            View All Services
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
