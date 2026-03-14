import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                <div className="absolute top-1/2 right-[-10%] w-[40rem] h-[40rem] rounded-full bg-white blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Achieve Your <br className="hidden md:block" /> Perfect Smile?
                    </h2>
                    <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Book your consultation today and take the first step towards better dental health with our expert team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-primary font-bold text-lg hover:bg-slate-100 transition shadow-xl"
                        >
                            Book Your Appointment Today
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href="tel:+15551234567"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary-foreground/10 text-white font-bold text-lg hover:bg-primary-foreground/20 border border-primary-foreground/20 transition backdrop-blur-sm"
                        >
                            Call Us Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
