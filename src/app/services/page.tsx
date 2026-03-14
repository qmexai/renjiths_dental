"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

// Service Data
const allServices = [
    {
        title: "Teeth Cleaning & Exam",
        shortDesc: "Comprehensive cleaning to remove plaque and prevent decay.",
        longDesc: "Our thorough dental cleaning removes hardened plaque (tartar) that brushing can't. We also conduct a complete examination, checking for signs of cavities, gum disease, and oral cancer. Regular cleanings are the foundation of lifelong dental health.",
        benefits: ["Fresher breath", "Prevents cavities", "Early detection of issues", "Polished smile"],
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Root Canal Treatment",
        shortDesc: "Save infected or damaged teeth with painless root canal therapy.",
        longDesc: "When the pulp of your tooth becomes infected, a root canal is often the only way to save it. We use state-of-the-art numbing and modern techniques to ensure the procedure is virtually painless and highly effective.",
        benefits: ["Relieves tooth pain", "Saves the natural tooth", "Prevents spread of infection"],
        image: "https://images.unsplash.com/photo-1598256989408-ae7ddaa696e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Dental Implants",
        shortDesc: "Permanent, natural-looking replacements for missing teeth.",
        longDesc: "Implants offer a permanent solution to missing teeth. A titanium post acts as an artificial root, capped with a lifelike crown. They feel, look, and function exactly like natural teeth.",
        benefits: ["Permanent solution", "Looks natural", "Prevents bone loss", "Restores chewing ability"],
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Teeth Whitening",
        shortDesc: "Brighten your smile dramatically in just one visit.",
        longDesc: "Our professional whitening treatments can lighten your teeth by several shades, removing stains from coffee, tea, wine, and aging. It's safe, fast, and far more effective than over-the-counter kits.",
        benefits: ["Instant results", "Safe for enamel", "Boosts confidence"],
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Braces & Clear Aligners",
        shortDesc: "Straighten your teeth for a perfect, healthy smile.",
        longDesc: "Whether you prefer traditional braces or modern clear aligners (like Invisalign), we offer customized orthodontic solutions to correct misalignment, crowding, and bite issues.",
        benefits: ["Improves bite", "Easier to clean teeth", "Enhanced aesthetics"],
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Pediatric Dentistry",
        shortDesc: "Gentle and fun dental care tailored specifically for children.",
        longDesc: "We provide a welcoming, fear-free environment for kids. From their first tooth to their teenage years, we focus on preventative care and teaching good oral hygiene habits early on.",
        benefits: ["Fear-free environment", "Preventative focus", "Sealants & fluoride treatments"],
        image: "https://images.unsplash.com/photo-1592317180491-9ed61596791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Tooth Extraction",
        shortDesc: "Safe and comfortable removal of severely damaged or wisdom teeth.",
        longDesc: "When a tooth cannot be saved, or when wisdom teeth cause crowding and pain, an extraction is necessary. We ensure the procedure is as comfortable and minimally invasive as possible.",
        benefits: ["Prevents crowding", "Relieves pain", "Fast recovery protocols"],
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Cosmetic Dentistry",
        shortDesc: "Veneers, bonding, and total smile makeovers.",
        longDesc: "Enhance the appearance of your smile with custom cosmetic treatments. We can repair chips, close gaps, and reshape teeth to give you the flawless smile you've always wanted.",
        benefits: ["Customized treatment plan", "Repairs chips & cracks", "Long-lasting results"],
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

export default function ServicesPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <main className="flex-grow">

            {/* Hero Section */}
            <section className="bg-primary/5 py-20 lg:py-24 border-b border-primary/10">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        Our <span className="text-primary">Dental Services</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        From routine cleanings to advanced restorative treatments, our expert team provides comprehensive dental care tailored to your specific needs.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

                        {allServices.map((service, index) => {
                            const isExpanded = expandedIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-lg ring-1 ring-primary/20' : 'shadow-sm hover:shadow-md'}`}
                                >
                                    <div
                                        className="p-6 cursor-pointer flex justify-between items-start"
                                        onClick={() => toggleExpand(index)}
                                    >
                                        <div className="flex gap-4 items-start">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 mt-1">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">{service.shortDesc}</p>
                                            </div>
                                        </div>
                                        <button className={`p-2 rounded-full bg-slate-50 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-primary/10 text-primary' : ''}`}>
                                            <ChevronDown className="h-5 w-5" />
                                        </button>
                                    </div>

                                    {/* Expandable Details */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                                            <p className="text-slate-700 mb-6 text-sm">{service.longDesc}</p>

                                            <h4 className="font-semibold text-slate-800 text-sm mb-3">Key Benefits:</h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-sm">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start text-slate-600">
                                                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
                                            >
                                                Book this Service
                                                <ArrowRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Schedule Your Appointment Today
                    </h2>
                    <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                        Take the first step towards a healthier, brighter smile. Our friendly team is ready to assist you.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-bold text-primary shadow transition hover:bg-slate-100"
                    >
                        Contact Us Now
                    </Link>
                </div>
            </section>

        </main>
    );
}
