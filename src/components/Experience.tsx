import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Data Structures & Algorithms Trainee',
    company: 'Board Infinity',
    period: 'May 2024 – July 2024',
    location: 'Remote',
    highlights: [
      'Completed structured training in DSA using C++, focusing on advanced problem-solving and optimization techniques',
      'Designed and implemented efficient solutions using Arrays, Linked Lists, Stacks, Recursion, Greedy Algorithms, and Dynamic Programming',
      'Conducted time and space complexity analysis (Big-O) to enhance performance and scalability of algorithms',
    ],
    technologies: ['C++', 'DSA', 'Arrays', 'Linked Lists', 'Dynamic Programming', 'Greedy'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container overflow-hidden">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </div>
          <h2 className="section-title gradient-text">Work Experience</h2>
          <p className="section-subtitle">
            Professional training and hands-on industry experience
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index}
              className="glass-card p-8 lg:p-9 fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Left accent line */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))' }}
              />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-7">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-[#909090]">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="font-medium text-sm">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-[#606060] text-[13px]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />{exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />{exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-4 mb-8">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-white/30 mt-2.5 flex-shrink-0" />
                    <span className="text-[#909090] text-[15px] leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#808080]"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
