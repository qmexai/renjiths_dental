import Link from "next/link";
import { Pill as Tooth, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Clinic Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                <Tooth className="h-6 w-6" />
                            </div>
                            <span className="font-bold text-xl text-foreground">SmileCare</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Providing professional, comfortable, and advanced dental care for you and your family to achieve a perfect smile.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Our Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Teeth Cleaning</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Root Canal</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Dental Implants</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Teeth Whitening</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>123 Dental Avenue, Medical District,<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>contact@smilecareclinic.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
