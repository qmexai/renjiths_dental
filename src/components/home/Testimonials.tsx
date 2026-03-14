import { Star, Quote } from "lucide-react";
import FadeIn from "../shared/FadeIn";

const testimonials = [
    {
        name: "Emily Roberts",
        rating: 5,
        text: "The best dental experience I've ever had! The staff was incredibly friendly, and Dr. Johnson explained every step of my root canal treatment. It was completely painless and the recovery was smooth.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Michael Chen",
        rating: 5,
        text: "I used to have terrible anxiety about visiting the dentist until I found SmileCare. The environment is so calming, and the team goes out of their way to ensure you are comfortable. Highly recommended!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Sarah Williams",
        rating: 5,
        text: "Got my teeth whitened here before my wedding. The results were absolutely amazing! The whole process was quick and the staff made sure I felt pampered. Thank you for my perfect smile!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn delay={0.1}>
                        <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What Our Patients Say
                        </h3>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-slate-600">
                            Don't just take our word for it. Read about the experiences of our real patients and see why they trust us with their smiles.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index} delay={0.2 + (index * 0.15)} direction="up">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                                <div>
                                    <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-100 transition-colors group-hover:text-primary/10" />

                                    <div className="flex space-x-1 mb-6 text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-slate-700 italic mb-8 relative z-10">"{testimonial.text}"</p>
                                </div>

                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary/20"
                                    />
                                    <div>
                                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500">Verified Patient</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
