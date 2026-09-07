import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { label: t({ id: 'Tentang', en: 'About' }), id: 'about' },
    { label: t({ id: 'Keahlian', en: 'Skills' }), id: 'skills' },
    { label: t({ id: 'Pengalaman', en: 'Experience' }), id: 'experience' },
    { label: t({ id: 'Proyek', en: 'Projects' }), id: 'projects' },
    { label: t({ id: 'Pendidikan', en: 'Education' }), id: 'more' }
  ];

  const mobileNavItems = [
    ...navItems,
    { label: t({ id: 'Kontak', en: 'Contact' }), id: 'contact' }
  ];

  const getLinkHref = (id) => {
    if (isProjectsPage) {
      return `/#${id}`;
    }
    return `#${id}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(253,253,251,0.82)] backdrop-blur-[10px] border-b border-border-custom">
      <div className="max-w-[1120px] mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-lg flex items-center gap-2">Rahmad Hidayad</Link>
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={getLinkHref(item.id)} 
                className="text-[14px] font-medium text-ink-soft relative py-1 transition-colors duration-200 hover:text-blue after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-yellow after:transition-all after:duration-250 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="text-[13px] font-semibold py-[7px] px-[14px] rounded-full bg-white-soft border border-border-custom text-ink transition-all duration-200 hover:border-blue hover:-translate-y-[1px]"
            aria-label="Switch language"
          >
            {language === 'id' ? '🇬🇧 EN' : '🇮🇩 ID'}
          </button>
          
          <a 
            href={isProjectsPage ? '/#contact' : '#contact'} 
            className="text-[13px] font-semibold py-[9px] px-[18px] rounded-full bg-ink text-white transition-all duration-200 hover:bg-blue hover:-translate-y-[1px]"
          >
            {t({ id: 'Hubungi Saya', en: 'Contact Me' })}
          </a>
        </div>
        <button 
          className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-1.5 focus-visible:outline-2 focus-visible:outline-blue focus-visible:outline-offset-4 focus-visible:rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka menu"
        >
          <span className="w-[22px] h-[2px] bg-ink block rounded-[2px]"></span>
          <span className="w-[22px] h-[2px] bg-ink block rounded-[2px]"></span>
          <span className="w-[22px] h-[2px] bg-ink block rounded-[2px]"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[60px] left-0 right-0 bg-white border-b border-border-custom px-8 py-5 flex-col gap-4 z-[99] shadow-custom ${isOpen ? 'flex' : 'hidden'}`}>
        {mobileNavItems.map((item) => (
          <a 
            key={item.id} 
            href={getLinkHref(item.id)} 
            className="text-[15px] font-medium text-ink-soft"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        {/* Mobile Language Switcher */}
        <button
          onClick={() => {
            toggleLanguage();
            setIsOpen(false);
          }}
          className="text-[15px] font-medium text-ink-soft text-left"
        >
          {language === 'id' ? '🇬🇧 English' : '🇮🇩 Bahasa Indonesia'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
