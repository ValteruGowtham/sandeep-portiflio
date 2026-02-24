import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sandeepbala606@gmail.com',
    href: 'mailto:sandeepbala606@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 93986 06732',
    href: 'tel:+919398606732',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Andhra Pradesh, India',
    href: '#',
  },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/balasandeep' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/balasandeep' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-container overflow-hidden">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title gradient-text">Contact</h2>
          <p className="section-subtitle">
            Feel free to reach out — I'd love to connect and collaborate
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4 fade-in-up">
            {contactInfo.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="glass-card-static flex items-center gap-4 p-5 group transition-all duration-300 hover:border-white/10"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <c.icon className="w-4 h-4 text-[#808080] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[11px] text-[#505050] uppercase tracking-wider font-medium mb-0.5">{c.label}</div>
                  <div className="text-[#b0b0b0] text-sm font-medium group-hover:text-white transition-colors">{c.value}</div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-static flex items-center gap-2.5 px-5 py-3 rounded-md group transition-all duration-300 hover:border-white/10"
                >
                  <s.icon className="w-4 h-4 text-[#808080] group-hover:text-white transition-colors" />
                  <span className="text-[#808080] text-sm font-medium group-hover:text-white transition-colors">{s.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#505050] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 fade-in-up" style={{ animationDelay: '0.15s' }}>
            <form
              className="glass-card-static p-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:sandeepbala606@gmail.com';
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-[#505050] uppercase tracking-wider font-medium mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#404040] focus:outline-none focus:border-white/15 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#505050] uppercase tracking-wider font-medium mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#404040] focus:outline-none focus:border-white/15 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] text-[#505050] uppercase tracking-wider font-medium mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#404040] focus:outline-none focus:border-white/15 transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] text-[#505050] uppercase tracking-wider font-medium mb-2 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#404040] focus:outline-none focus:border-white/15 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/15 text-white rounded-lg py-3.5 text-sm font-medium transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
