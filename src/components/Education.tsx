import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'Aug 2022 – Present',
    grade: '6.85 CGPA',
    highlights: [
      'Specialization in Data Structures, Algorithms, and Machine Learning',
      'Coursework in AI, Database Systems, and Computer Vision',
      'Active in competitive programming and technical events',
    ],
  },
  {
    degree: 'Intermediate',
    field: 'MPC – Mathematics, Physics, Chemistry',
    institution: 'Narayana Junior College',
    location: 'Andhra Pradesh, India',
    period: '2020 – 2022',
    highlights: [
      'Strong foundation in mathematics and analytical thinking',
    ],
  },
  {
    degree: 'Matriculation',
    field: 'General Education',
    institution: 'Universal High School',
    location: 'Andhra Pradesh, India',
    period: '2019 – 2020',
    highlights: [
      'Academic foundation with focus on science and mathematics',
    ],
  },
];

const certifications = [
  { name: 'Cloud Computing', issuer: 'NPTEL', year: '2024' },
  { name: 'Generative AI', issuer: 'Coursera', year: '2024' },
  { name: 'Data Structures & Algorithms', issuer: 'Board Infinity', year: '2024' },
];

export default function Education() {
  return (
    <section id="education" className="section-container overflow-hidden">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="section-title gradient-text">Education & Certifications</h2>
          <p className="section-subtitle">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Education – 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            {education.map((edu, index) => (
              <div key={index}
                className="glass-card p-8 fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Accent */}
                <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))' }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-[15px] mb-0.5">{edu.degree}</h3>
                    <p className="text-[#808080] text-sm font-medium">{edu.field}</p>
                    <p className="text-[#606060] text-sm">{edu.institution}</p>
                  </div>
                  {edu.grade && (
                    <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white/80 flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {edu.grade}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-[#505050] text-[13px] mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{edu.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{edu.location}</span>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#808080] text-[13px]">
                      <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications – 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Award className="w-4 h-4 text-white/70" />
              </div>
              <h3 className="text-white font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index}
                  className="glass-card p-5 fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-white/90 font-medium text-[14px]">{cert.name}</h4>
                      <p className="text-[#606060] text-xs mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-[#505050] text-xs font-medium flex-shrink-0">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
