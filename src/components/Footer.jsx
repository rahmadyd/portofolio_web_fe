import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-[110px] pb-[60px] bg-blue-deep text-white border-t border-border-custom relative overflow-hidden contact-bg-circle" id="contact">
      <div className="relative text-center max-w-[620px] mx-auto px-6 sm:px-8">
        <span className="inline-flex items-center gap-2 justify-center font-mono text-[12px] text-yellow bg-[rgba(212,42,68,0.12)] border border-[rgba(212,42,68,0.35)] py-[6px] px-[13px] rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0"></span>
          {t({ id: 'Kontak', en: 'Contact' })}
        </span>
        <h2 className="text-white text-[clamp(28px,4vw,40px)] mb-4 leading-tight">
          {t({ 
            id: 'Mari berkolaborasi di proyek berikutnya.', 
            en: "Let's collaborate on the next project." 
          })}
        </h2>
        <p className="text-[#C9BFBF] text-[16px] mb-[40px]">
          {t({
            id: 'Terbuka untuk peluang remote sebagai AI Engineer. Isi form di bawah ini untuk mengirim pesan langsung.',
            en: 'Open for remote opportunities as an AI Engineer. Fill the form below to send a direct message.'
          })}
        </p>
        
        {/* Contact Form */}
        <form 
          action="https://formspree.io/f/mvoeljnd" 
          method="POST"
          className="bg-[rgba(255,255,255,0.02)] p-6 sm:p-8 rounded-[24px] border border-[rgba(255,255,255,0.06)] mb-[40px] text-left flex flex-col gap-5 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-1">
              <label htmlFor="name" className="block text-[13px] font-medium text-[#B0A5A5] mb-2 ml-1">
                {t({ id: 'Nama Lengkap', en: 'Full Name' })}
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder={t({ id: 'John Doe', en: 'John Doe' })}
                required 
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[14px] px-4 py-3.5 text-white text-[14.5px] focus:outline-none focus:border-yellow focus:bg-[rgba(255,255,255,0.06)] transition-all placeholder:text-[rgba(255,255,255,0.2)]" 
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-[13px] font-medium text-[#B0A5A5] mb-2 ml-1">
                {t({ id: 'Alamat Email', en: 'Email Address' })}
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com"
                required 
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[14px] px-4 py-3.5 text-white text-[14.5px] focus:outline-none focus:border-yellow focus:bg-[rgba(255,255,255,0.06)] transition-all placeholder:text-[rgba(255,255,255,0.2)]" 
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-[13px] font-medium text-[#B0A5A5] mb-2 ml-1">
              {t({ id: 'Pesan Anda', en: 'Your Message' })}
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder={t({ 
                id: 'Halo, saya tertarik untuk bekerja sama...', 
                en: 'Hello, I am interested in working together...' 
              })}
              required 
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[14px] px-4 py-3.5 text-white text-[14.5px] focus:outline-none focus:border-yellow focus:bg-[rgba(255,255,255,0.06)] transition-all resize-none placeholder:text-[rgba(255,255,255,0.2)]"
            ></textarea>
          </div>
          <button type="submit" className="mt-1 w-full bg-yellow text-white py-[15px] px-6 rounded-[14px] font-semibold text-[15px] transition-all duration-300 hover:bg-[#E8425C] hover:shadow-[0_12px_24px_-10px_rgba(212,42,68,0.6)] hover:-translate-y-1 flex justify-center items-center gap-2 group">
            {t({ id: 'Kirim Pesan Sekarang', en: 'Send Message Now' })}
            <svg className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>

        <div className="flex gap-[14px] justify-center flex-wrap mb-[50px]">
          <a 
            href="https://linkedin.com/in/rahmadyd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-[rgba(255,255,255,0.15)] text-[#C9BFBF] bg-[rgba(255,255,255,0.02)] py-[12px] px-6 rounded-[12px] font-medium text-[14px] transition-all duration-300 hover:border-yellow hover:text-yellow hover:-translate-y-1 border flex items-center gap-2 hover:bg-[rgba(255,255,255,0.05)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/rahmadyd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-[rgba(255,255,255,0.15)] text-[#C9BFBF] bg-[rgba(255,255,255,0.02)] py-[12px] px-6 rounded-[12px] font-medium text-[14px] transition-all duration-300 hover:border-yellow hover:text-yellow hover:-translate-y-1 border flex items-center gap-2 hover:bg-[rgba(255,255,255,0.05)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </div>
        
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-[28px] flex justify-between items-center flex-wrap gap-[14px] text-[13px] text-[#8C7E7E]">
          <span>© 2026 Rahmad Hidayad. Bengkulu, Indonesia.</span>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/rahmadyd" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com/rahmadyd" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors duration-200">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
