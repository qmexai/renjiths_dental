import { CheckCircle2 } from "lucide-react";
import FadeIn from "../shared/FadeIn";

export default function AboutSection() {
    const points = [
        "Over 15 years of experience",
        "Modern & professional dental care",
        "Patient-focused gentle treatment",
        "State-of-the-art facility"
    ];

    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Images */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <FadeIn direction="right" delay={0.1} fullWidth>
                                <div className="space-y-4 pt-8">
                                    <img
                                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Dental Clinic Interior"
                                        className="rounded-2xl shadow-lg w-full object-cover h-64 hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                            </FadeIn>
                            <FadeIn direction="right" delay={0.3} fullWidth>
                                <div className="space-y-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Dr. Sarah Johnson"
                                        className="rounded-2xl shadow-lg w-full object-cover h-80 hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                            </FadeIn>
                        </div>

                        {/* Floating Badge */}
                        <FadeIn direction="up" delay={0.5}>
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-4 border border-slate-100 hidden sm:flex hover:-translate-y-1 transition-transform">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                                    15+
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Years</p>
                                    <p className="text-sm text-slate-500">Experience</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Content */}
                    <div className="lg:pl-8">
                        <FadeIn direction="left" delay={0.1}>
                            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">About Our Clinic</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Committed to Your Dental Health & Beautiful Smile
                            </h3>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                At SmileCare, we believe that a healthy smile is the foundation of confidence and overall well-being. Our dedicated team of dental professionals combines advanced technology with a compassionate approach to provide you with the best possible care.
                            </p>
                        </FadeIn>

                        <ul className="space-y-4 mb-8">
                            {points.map((point, index) => (
                                <FadeIn key={index} direction="left" delay={0.3 + (index * 0.1)}>
                                    <li className="flex items-center text-slate-700">
                                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                </FadeIn>
                            ))}
                        </ul>

                        <FadeIn direction="up" delay={0.6}>
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 hover:shadow-md transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                    alt="Dr. Sarah Johnson"
                                    className="w-16 h-16 rounded-full object-cover shadow-md"
                                />
                                <div>
                                    <p className="text-lg font-bold text-slate-900">Dr. Sarah Johnson</p>
                                    <p className="text-primary font-medium text-sm">Lead Dentist, DDS</p>
                                    <p className="text-slate-500 text-sm mt-1">Specialist in Cosmetic & Implant Dentistry</p>
                                </div>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </div>
        </section>
    );
}
