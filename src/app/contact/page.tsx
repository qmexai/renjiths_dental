import AppointmentForm from "@/components/shared/AppointmentForm";
import EnquiryForm from "@/components/shared/EnquiryForm";
import LocationSection from "@/components/home/LocationSection";

export default function ContactPage() {
    return (
        <main className="flex-grow flex flex-col pt-10">

            {/* Page Header */}
            <section className="bg-white border-b border-primary/10">
                <div className="container mx-auto px-4 text-center max-w-4xl pb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Whether you want to book an appointment or simply have a quick question, our friendly team is here to help you online or over the phone.
                    </p>
                </div>
            </section>

            {/* Forms Section */}
            <section className="py-20 bg-slate-50 relative">
                <div className="container mx-auto px-4 z-10 relative">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Appointment Booking */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50 transform translate-y-10"></div>
                            <AppointmentForm />
                        </div>

                        {/* General Enquiry */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary blur-3xl rounded-full opacity-50 transform translate-y-10"></div>
                            <EnquiryForm />
                        </div>

                    </div>
                </div>
            </section>

            {/* Location Section */}
            <LocationSection />

        </main>
    );
}
