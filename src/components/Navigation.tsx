import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(i => i.href.slice(1));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(15,15,15,0.95)' : 'rgba(15,15,15,0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            <a href="#about" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <span className="text-white/70 font-medium text-sm hidden sm:block">Bala Sandeep</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item) => (
                <a key={item.name} href={item.href}
                  className="relative px-3.5 py-2 rounded-md text-[13px] font-medium transition-all duration-300"
                  style={{
                    color: active === item.href.slice(1) ? '#ffffff' : '#707070',
                    background: active === item.href.slice(1) ? 'rgba(255,255,255,0.08)' : 'transparent',
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a href="#contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:opacity-90"
              style={{ background: '#ffffff', color: '#0f0f0f' }}
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>

            <button className="lg:hidden text-white/70 p-1.5" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[1001] lg:hidden flex flex-col items-center justify-center"
          style={{ background: 'rgba(15,15,15,0.98)', backdropFilter: 'blur(20px)' }}
        >
          <button className="absolute top-5 right-5 text-white/70 p-2" onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-5">
            {navItems.map((item) => (
              <a key={item.name} href={item.href}
                className="text-xl font-semibold text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >{item.name}</a>
            ))}
            <a href="#contact"
              className="mt-4 px-8 py-3 rounded-lg font-bold"
              style={{ background: '#ffffff', color: '#0f0f0f' }}
              onClick={() => setMobileOpen(false)}
            >Resume</a>
          </div>
        </div>
      )}
    </>
  );
}
