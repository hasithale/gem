import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-amber-200/50 py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="font-serif italic text-lg text-blue-900 dark:text-blue-200 mb-6">Ceylon Gem Merchant</div>
          <p className="font-serif text-xs tracking-wider text-slate-600 dark:text-slate-400">
            Purveyors of world-class Sri Lankan gemstones since 1948. Licensed master gemologists specializing in rare investment-grade sapphires.
          </p>
        </div>
        
        <div>
          <h6 className="font-label-caps text-label-caps text-primary mb-6 uppercase tracking-widest">Discovery</h6>
          <ul className="space-y-4">
            <li><Link className="font-serif text-xs tracking-wider text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors" href="/heritage">Heritage Story</Link></li>
            <li><Link className="font-serif text-xs tracking-wider text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors" href="/authentication">GIA Certification</Link></li>
            <li><Link className="font-serif text-xs tracking-wider text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors" href="/provenance">Provenance</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="font-label-caps text-label-caps text-primary mb-6 uppercase tracking-widest">Client Care</h6>
          <ul className="space-y-4">
            <li><Link className="font-serif text-xs tracking-wider text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors" href="/shipping">Shipping Policy</Link></li>
            <li><Link className="font-serif text-xs tracking-wider text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors" href="/contact">Contact Us</Link></li>
            <li><a className="font-serif text-xs tracking-wider text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors" href="https://wa.me/94777123456">WhatsApp Consultation</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-label-caps text-label-caps text-primary mb-6 uppercase tracking-widest">Newsletter</h6>
          <p className="font-serif text-xs tracking-wider text-slate-600 mb-4">Join our inner circle for rare stone previews.</p>
          <div className="flex border-b border-amber-200 pb-2 items-center">
            <input className="bg-transparent border-none focus:ring-0 text-xs w-full outline-none" placeholder="Email Address" type="email" />
            <button className="text-secondary text-[10px] uppercase font-bold tracking-widest hover:opacity-70 transition-opacity">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-serif text-xs tracking-wider text-slate-500">© 2024 Sri Lankan Master Gemologist. Licensed by NGJA.</p>
        <div className="flex gap-6">
          <button className="text-slate-400 hover:text-secondary material-symbols-outlined text-sm">share</button>
          <button className="text-slate-400 hover:text-secondary material-symbols-outlined text-sm">camera</button>
          <button className="text-slate-400 hover:text-secondary material-symbols-outlined text-sm">mail</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
