import { ShieldCheck, Stethoscope, BadgeDollarSign, Users, Sofa } from "lucide-react";
import FadeIn from "../shared/FadeIn";
import AnimatedCounter from "../shared/AnimatedCounter";
import Image from "next/image";

const advantages = [
    {
        title: "Experienced Dentists",
        description: "Our highly qualified team brings years of expertise in advanced dental care.",
        icon: Stethoscope,
    },
    {
        title: "Modern Equipment",
        description: "We use cutting-edge technology for precise diagnostics and painless treatments.",
        icon: ShieldCheck,
    },
    {
        title: "Affordable Treatment",
        description: "Premium dental care that fits your budget with transparent pricing.",
        icon: BadgeDollarSign,
    },
    {
        title: "Friendly Staff",
        description: "A compassionate team dedicated to making you feel welcome and cared for.",
        icon: Users,
    },
    {
        title: "Comfortable Environment",
        description: "Relaxing clinic atmosphere designed to reduce anxiety and stress.",
        icon: Sofa,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1">
                        <FadeIn delay={0.1} direction="right">
                            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center">
                                Your Smile Is Our Top Priority
                            </h3>
                            <p className="text-slate-600 mb-10">
                                We are committed to providing an exceptional dental experience. From our welcoming waiting room to our state-of-the-art treatment spaces, every aspect of our clinic is designed with your comfort and health in mind.
                            </p>
                        </FadeIn>

                        <div className="space-y-6">
                            {advantages.map((adv, index) => (
                                <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="right">
                                    <div className="flex group">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <adv.icon className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">{adv.title}</h4>
                                            <p className="mt-1 text-slate-600">{adv.description}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <FadeIn delay={0.3} direction="left" fullWidth>
                            <div className="relative rounded-3xl shadow-xl w-full aspect-[4/5] overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 z-0"></div>
                                <Image
                                    fill
                                    src="https://images.unsplash.com/photo-1606265752439-1f18756aa5ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Dental Care Team"
                                    className="object-cover relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            {/* Stats Overlay inside the image container */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center justify-center min-w-[150px] transform hover:-translate-y-2 transition-transform duration-300 z-10 hidden sm:flex">
                                <span className="text-4xl font-bold text-primary mb-1">
                                    <AnimatedCounter end={5000} suffix="+" duration={2.5} />
                                </span>
                                <span className="text-sm font-semibold text-slate-600">Happy Patients</span>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
