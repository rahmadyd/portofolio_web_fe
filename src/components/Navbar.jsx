import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  const navItems = [
    { label: 'Tentang', id: 'about' },
    { label: 'Keahlian', id: 'skills' },
    { label: 'Pengalaman', id: 'experience' },
    { label: 'Proyek', id: 'projects' },
    { label: 'Pendidikan', id: 'more' }
  ];

  const mobileNavItems = [
    ...navItems,
    { label: 'Kontak', id: 'contact' }
  ];

  const getLinkHref = (id) => {
    if (isProjectsPage) {
      return '/';
    }
    return `#${id}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(253,253,251,0.82)] backdrop-blur-[10px] border-b border-border-custom">
      <div className="max-w-[1120px] mx-auto px-8 py-4 flex items-center justify-between">
        <a href="/" className="font-heading font-bold text-lg flex items-center gap-2">Rahmad Hidayad</a>
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
        <a 
          href={isProjectsPage ? '/' : '#contact'} 
          className="text-[13px] font-semibold py-[9px] px-[18px] rounded-full bg-ink text-white transition-all duration-200 hover:bg-blue hover:-translate-y-[1px] hidden md:inline-block"
        >
          Hubungi Saya
        </a>
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
      </div>
    </header>
  );
};

export default Navbar;
