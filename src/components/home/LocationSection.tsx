import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeIn from "../shared/FadeIn";

export default function LocationSection() {
    return (
        <section className="py-20 bg-white" id="location">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn delay={0.1}>
                        <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Visit Us</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Clinic Location
                        </h3>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-slate-600">
                            Conveniently located in the heart of the city with available parking. We look forward to welcoming you to our modern facility.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    <div className="lg:col-span-1 space-y-6">
                        <FadeIn delay={0.2} direction="right" fullWidth>
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                                <h4 className="text-xl font-bold text-slate-800 mb-6">Contact Details</h4>

                                <ul className="space-y-6">
                                    <li className="flex items-start shadow-sm bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg text-primary mr-4">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800">Clinic Address</p>
                                            <p className="text-slate-600 mt-1 text-sm">123 Dental Avenue, Medical District, New York, NY 10001</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start shadow-sm bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg text-primary mr-4">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800">Phone Number</p>
                                            <p className="text-slate-600 mt-1 text-sm">+1 (555) 123-4567</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start shadow-sm bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg text-primary mr-4">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800">Email Address</p>
                                            <p className="text-slate-600 mt-1 text-sm">contact@smilecareclinic.com</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start shadow-sm bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg text-primary mr-4">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800">Working Hours</p>
                                            <p className="text-slate-600 mt-1 text-sm">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-2 h-full min-h-[400px]">
                        <FadeIn delay={0.3} direction="up" fullWidth>
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
                                {/* Replace src with actual Google Maps Embed URL */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280010892!2d-74.14448731338575!3d40.69763123330614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709141940909!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "400px" }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Clinic Location on Map"
                                ></iframe>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
