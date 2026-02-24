import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const links = [
  { icon: Github, href: 'https://github.com/balasandeep', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/balasandeep', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sandeepbala606@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-[1080px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="text-white font-bold text-lg tracking-tight mb-1">
              Bala Sandeep
            </div>
            <div className="text-[#505050] text-xs font-medium">
              CSE Undergraduate · DSA & ML Enthusiast
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#606060] hover:text-white hover:bg-white/[0.05] transition-all duration-300"
              >
                <l.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-[#404040] text-xs">
            <span>© {new Date().getFullYear()} · Made with</span>
            <Heart className="w-3 h-3 text-[#606060]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
