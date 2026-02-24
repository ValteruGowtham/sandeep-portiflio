import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import ThreeHeroScene from './ThreeScene';

const socialLinks = [
  { Icon: Github, href: 'https://github.com/balasandeep', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/balasandeep', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:sandeepbala606@gmail.com', label: 'Email' },
  { Icon: Phone, href: 'tel:+919398606732', label: 'Phone' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-in-up');
    els?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.12}s`;
    });
  }, []);

  return (
    <section id="about" ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeHeroScene />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.6) 0%, rgba(15,15,15,0.3) 40%, rgba(15,15,15,0.8) 100%)' }}
      />

      {/* Content */}
      <div className="max-w-[760px] mx-auto relative z-10 px-6 text-center pt-24 pb-16">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-10 fade-in-up"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-[#808080] font-medium tracking-wide">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="font-extrabold gradient-text leading-[1.05] mb-5 fade-in-up"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '-0.04em' }}
        >
          Bala Sandeep
        </h1>

        {/* Role */}
        <p className="text-[#909090] font-medium mb-8 fade-in-up"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '0.01em' }}
        >
          CSE Undergraduate · DSA & ML Enthusiast · Problem Solver
        </p>

        {/* Description */}
        <p className="text-[#707070] leading-[1.8] max-w-lg mx-auto mb-12 fade-in-up text-[15px]">
          B.Tech Computer Science student at Lovely Professional University with expertise in
          Data Structures & Algorithms, Machine Learning, and Computer Vision. Passionate about 
          building efficient solutions and solving complex problems.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 mb-12 fade-in-up">
          {[
            { label: 'LeetCode', value: '100+' },
            { label: 'CGPA', value: '6.85' },
            { label: 'Projects', value: '4+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-[11px] text-[#606060] font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14 fade-in-up">
          <a href="#projects"
            className="px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:opacity-90"
            style={{ background: '#ffffff', color: '#0f0f0f' }}
          >
            View Projects
          </a>
          <a href="#contact"
            className="px-8 py-3.5 rounded-lg font-semibold text-sm text-white/80 transition-all duration-300 hover:bg-white/5"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 justify-center mb-16 fade-in-up">
          {socialLinks.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-md flex items-center justify-center transition-all duration-300 hover:bg-white/8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              title={label}
            >
              <Icon className="w-4 h-4 text-[#808080]" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="fade-in-up">
          <ArrowDown className="w-4 h-4 text-[#404040] mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
}
