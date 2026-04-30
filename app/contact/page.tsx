import { Mail, Phone, MapPin, MessageCircle, Clock, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Contact Hero */}
      <section className="bg-slate-50 py-24 border-b border-gray-100">
        <div className="container text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Concierge Services</p>
          <h1 className="text-5xl mb-8">Personal <span className="italic font-normal">Consultation</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Whether you are seeking a rare investment-grade stone or a bespoke jewelry piece, 
            our master gemologists are here to guide you through a private discovery experience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Inquiry Form */}
          <div>
            <h2 className="text-3xl mb-10">Send an <span className="italic font-normal">Inquiry</span></h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input type="text" className="bg-transparent border-0 border-b border-gray-200 py-3 focus:ring-0 focus:border-gold outline-none text-sm" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input type="email" className="bg-transparent border-0 border-b border-gray-200 py-3 focus:ring-0 focus:border-gold outline-none text-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Interest Area</label>
                <select className="bg-transparent border-0 border-b border-gray-200 py-3 focus:ring-0 focus:border-gold outline-none text-sm">
                  <option>Rare Investment Stones</option>
                  <option>Bespoke Jewelry Inquiry</option>
                  <option>Certification & Verification</option>
                  <option>Wholesale/B2B Partnership</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Message</label>
                <textarea rows={4} className="bg-transparent border-0 border-b border-gray-200 py-3 focus:ring-0 focus:border-gold outline-none text-sm resize-none" placeholder="How can we assist you?" />
              </div>
              <button className="btn btn-primary w-full md:w-auto">Submit Inquiry</button>
            </form>
          </div>

          {/* Showroom Details */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-3xl mb-10">The <span className="italic font-normal">Showroom</span></h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-gold shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Colombo Gallery</h4>
                    <p className="text-sm text-gray-500">128 Galle Road, Kollupitiya,<br />Colombo 03, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-gold shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Direct Line</h4>
                    <p className="text-sm text-gray-500">+94 (11) 2345 678</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-gold shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-sm text-gray-500">concierge@ceylongems.lk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#faf8fd] p-10 border-l-4 border-gold">
              <h3 className="text-lg mb-6">Concierge <span className="italic font-normal">Availability</span></h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
                    <Clock size={14} /> Weekdays
                  </div>
                  <span className="font-semibold text-primary">09:00 AM - 06:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
                    <Clock size={14} /> Saturdays
                  </div>
                  <span className="font-semibold text-primary">10:00 AM - 04:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-gray-400">
                    <Calendar size={14} /> Sundays
                  </div>
                  <span className="font-semibold text-primary italic">By Appointment Only</span>
                </div>
              </div>
              <a 
                href="https://wa.me/94777123456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-[#25D366] py-4 rounded-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
            <MapPin size={20} /> Ratnapura Mining District & Colombo Office
          </p>
        </div>
        {/* In a real project, replace with an interactive map component */}
      </section>
    </main>
  );
}
