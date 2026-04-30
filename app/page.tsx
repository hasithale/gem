import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Blue Sapphire" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj7x7VWApbfTvWl_tlMkSm7W25Y8FLtn052RHqqKjttHaaDayN5atRwINU_-BpXwzXIfKwS8akyMCZrTjFbyTaQjMQmbgWMTof7oJmE513-kPRLpO_6S9WACgrPOhgZ2eL8tKRGilEpy0nMg3hibZNju-Y7kRXruUFqM5PBzKdbkBFTU7-OTGBZTioZ5ZkL-9AA2TStTsKYChlirUoigzLZ2TRSf-spTsWOynOS8Fq3rXYDbeAd5RJ7w-r-AfPUySb04TDpUvrOqM"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.4em] uppercase mb-6 block">Legacy of the Island</span>
            <h1 className="font-display-xl text-display-xl text-white mb-8 max-w-4xl mx-auto">The Heart of Ceylon</h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto mb-12">Experience the ethereal brilliance of hand-selected sapphires, ethically sourced from the ancient mines of Ratnapura.</p>
            <div className="flex gap-6 justify-center">
              <Link href="/collections" className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps tracking-widest border border-primary hover:bg-opacity-90 transition-opacity">Explore Masterpieces</Link>
              <Link href="/contact" className="bg-transparent text-white px-10 py-4 font-label-caps text-label-caps tracking-widest border border-white/40 hover:bg-white/10 transition-colors">Inquire</Link>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="font-label-caps text-[10px] text-white/50 tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </section>

        {/* Section 1: The Heritage */}
        <section className="py-section-gap px-margin-edge bg-surface">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  alt="Traditional Gem Mining" 
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS6uPYxioUOAmzq4-s8YgTJ3lyPXdR-vA5dsWbseHlDnQiKDaMCNHt0o848_GvhmBKVge5QL7l-cezDdDhmYEHWqnXjENGzYjTCrrjMICmypEbI6QocKcM7sHejmJR5jiLNd99d6bhus5dPW1jGYy7HZYjABSLoYsEeEbGncJlUbY979-moFn9hU-LfMhh4-1vpzwBUNIpRQrcmavq881E8z7BSViy_qQzIIoyFxmV5E0mZg60q6VHnpVIYb7nN0lt506uE8BjvGk"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-secondary-container p-12 hidden lg:block">
                <span className="font-display-xl text-display-xl text-on-secondary-container">1948</span>
                <p className="font-label-caps text-label-caps text-on-secondary-container mt-2">Established in Colombo</p>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col items-start">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">The Heritage of Master Gemologists</h2>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                For three generations, our family has navigated the treacherous mountain terrains and lush valleys of Sri Lanka to unearth stones of unparalleled purity. We don't just sell gems; we curate stories written by the earth over millions of years.
              </p>
              <button className="group flex items-center gap-4 border border-secondary px-8 py-4 font-label-caps text-label-caps text-primary hover:bg-secondary hover:text-white transition-all duration-300">
                Read More
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Featured Stones */}
        <section className="py-section-gap bg-surface-container-low px-margin-edge">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-20">
              <div>
                <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-4">Curated Selection</span>
                <h2 className="font-headline-lg text-headline-lg text-primary">Featured Masterpieces</h2>
              </div>
              <Link className="font-label-caps text-label-caps text-primary border-b border-primary/20 pb-2 hover:border-primary transition-all" href="/collections">View Full Catalog</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stone 1 */}
              <div className="group bg-surface shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-amber-200/20">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    alt="10ct Blue Sapphire" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFiERf7ibBeJNsUrvqqAp2uEB1QUtblKP-QEJUdksjZeW7jj0N_YO9yIED6BhI8wb6xx-GWjgPpNkKjJMqV6edILAYUyOpWsI6dVkakXvXKmyAisW04LnLNuKU4qRfj5FJ1oQt3ZrLRz9fUrVPNF3_tfZA6rD_HLVP7ESK5H0OR4d-_bKpstQJY7qmbm4Fib3acWR8jvlTIxwHnlQXkRZD-cqbFDhX0ti3a9BQi8MRPJSXNjK3MOG_L9b98DiiCQ1U_0970JGSBZE"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-primary px-6 py-2 font-label-caps text-label-caps">Details</button>
                  </div>
                </div>
                <div className="p-8 text-center border-t border-amber-100">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">10ct Blue Sapphire</h3>
                  <p className="font-label-caps text-label-caps text-secondary">Royal Blue • Unheated • Sri Lanka</p>
                </div>
              </div>
              {/* Stone 2 */}
              <div className="group bg-surface shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-amber-200/20">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    alt="Star Ruby" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr3SvWuCqHpWeaXdPGAg3b2xB6a5SXaGDpWG5v172o0HwjjLeT9hgWb_2tRAHdgM2EuZF9TvEra1xvorlwn9yadpRrXATKJgdnXFrfQYvizsLbtoV4VT1IHiQkN510JVpX3wc5U4xBrD0rQA8PB4BD2ba_7RkxxFQqU_ReyN4ZOEH3eIlc3mxSjQaB3TA2_4QPFsYxrSKbYVroDfmXw3Kpm8arhkF5dIAWg-nKuw4IgdM1heLyknvPdPIZlwfkmmYDXLIrvRjSgoI"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-primary px-6 py-2 font-label-caps text-label-caps">Details</button>
                  </div>
                </div>
                <div className="p-8 text-center border-t border-amber-100">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Sri Lankan Star Ruby</h3>
                  <p className="font-label-caps text-label-caps text-secondary">6-Ray Star • Natural • Certified</p>
                </div>
              </div>
              {/* Stone 3 */}
              <div className="group bg-surface shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-amber-200/20">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    alt="Padparadscha Sapphire" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY3ULhf4kz6Q2CI_VQ0PKzwFlDIz2L8CuN92ZhWptuFmxI01dWqyvE4pq4Gjc7B2XOaumFUdQDN_BHRI65Py3HEflLV-JSK-bZTreLJvX9pJXwLFDwr8Ii5kqlW-2HFqss5Ij_dR52WhI_YKXSTP1aSHsmRVVo2YNpSgXlDlfffQb13LnZVFcqiHX25Xu6sZo8cvUWSgdM2JI2c9jaPzFHKJ_2-0yNt0TgK6bypTSjKPIbNxyKjauVld6klpfSQ92VssEtTfpaVaI"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-primary px-6 py-2 font-label-caps text-label-caps">Details</button>
                  </div>
                </div>
                <div className="p-8 text-center border-t border-amber-100">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Padparadscha</h3>
                  <p className="font-label-caps text-label-caps text-secondary">Lotus Blossom • Collector Grade</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Trust & Quality */}
        <section className="py-section-gap bg-surface px-margin-edge border-y border-amber-100">
          <div className="max-w-container-max mx-auto text-center">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-6">Guaranteed Authenticity</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-16">Trust & Quality Certification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-surface-container-low p-12 border border-secondary/20 flex flex-col items-center">
                <div className="h-24 w-auto mb-8 flex items-center justify-center">
                  <img 
                    alt="NGJA Logo" 
                    className="h-full opacity-80 grayscale hover:grayscale-0 transition-all" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGNjInuZry1FQX4ANIEh3nW1sLxeEMBLqlU2s8ct9VGoAur1DMmCoHUeiPDXuyTcGFLVLZ-XaOA0k0sIiKc8DnC4lSSKn1mm1wz3xa8Mzt-IvVm-_zkdvrxuDTRXDM2vm1s-e-EAcZI2TQv4zPNBBU7dYkvYhLbX47xvtGFeIppCS64D-jCHXJ2OIxiDjUPG2ZcM6fkIY7uWp3Qxx4tOceVPrjlwikpXxuvexnUtZMNh3ySbCPmiXdVYU-CSWoPvG4o2SKjAlL5UU"
                  />
                </div>
                <h4 className="font-headline-md text-headline-md text-primary mb-4 text-[20px]">NGJA Certified</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Every stone is tested and licensed by the National Gem and Jewellery Authority of Sri Lanka.</p>
              </div>
              <div className="bg-surface-container-low p-12 border border-secondary/20 flex flex-col items-center">
                <div className="h-24 w-auto mb-8 flex items-center justify-center">
                  <img 
                    alt="GIA Logo" 
                    className="h-full opacity-80 grayscale hover:grayscale-0 transition-all" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB296u9TQnXZjgzeKRspcE_nkfK-Jm75UqIEHJOcHMig9XCMKPAV4UWLylXH7cz730bJRK2pX6ZRM5NN87AmH6JbOvfsJmacjwyEeOWaVf242DKW5uDQWALKub7E70VyR9-8fACy4eV87DghABba8FY6fkVM-fF9vI-7FjsjFA8zirhuXtM2ZqNFlJmTpR59nLPDGj1Ulh3ZS0abGmSH-P4_u9CsEFtoypeINwIX9WAdjGriB7yr6XCKJYyN2uhwqCE0jT0KgHl99g"
                  />
                </div>
                <h4 className="font-headline-md text-headline-md text-primary mb-4 text-[20px]">GIA Authentication</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">We provide world-class GIA certification for all high-value investment gemstones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section className="py-section-gap bg-surface-container-highest px-margin-edge">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-10">Consult with a Master Gemologist</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Visit our private gallery in Colombo or schedule a digital consultation for stones of specific requirements.</p>
              <form className="space-y-8">
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-primary absolute -top-3 left-0 bg-transparent px-1">Full Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline py-4 focus:ring-0 focus:border-secondary transition-colors" placeholder="Enter your name" type="text" />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-primary absolute -top-3 left-0 bg-transparent px-1">Email Address</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline py-4 focus:ring-0 focus:border-secondary transition-colors" placeholder="Enter your email" type="email" />
                </div>
                <div className="relative">
                  <label className="font-label-caps text-label-caps text-primary absolute -top-3 left-0 bg-transparent px-1">Message</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline py-4 focus:ring-0 focus:border-secondary transition-colors resize-none" placeholder="How can we assist you?" rows={4}></textarea>
                </div>
                <button className="bg-primary text-on-primary px-12 py-4 font-label-caps text-label-caps tracking-[0.2em] uppercase hover:bg-primary-container transition-colors">Send Inquiry</button>
              </form>
            </div>
            <div className="flex flex-col gap-8">
              <div className="aspect-video w-full overflow-hidden border border-amber-200">
                <img 
                  alt="Colombo Gallery Map" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4okhFIeRsck_Ogu6anQeF__KiKdXjAkEvxjI_sSj0lmgfcxjEE6zldyA17RZbDmGJJ28LyLPiLw9DcVU9sQTwJlErnQFOY2e-CVGJTYWNk5OkKjdlKC782RJgB7Qv9fyQcw0bVCS5mU9TjqWftgpWOm0YuIOI9V1DC9Pb3d6rghvWnGhpRkmi20ydkMfqLEOC_ywVHkFiyuBawq3vFcfJ69IVFBPt0t8BdbSpIf2BLsr9XbKPO7Qezv1cASrfzMDU3U8bz3ITHco"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="font-label-caps text-label-caps text-secondary mb-4 uppercase">Colombo Gallery</h5>
                  <p className="font-body-md text-body-md text-on-surface">128 Galle Road,<br />Kollupitiya, Colombo 03,<br />Sri Lanka</p>
                </div>
                <div>
                  <h5 className="font-label-caps text-label-caps text-secondary mb-4 uppercase">Direct Contact</h5>
                  <p className="font-body-md text-body-md text-on-surface">+94 (11) 2345 678<br />concierge@ceylongems.lk</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
