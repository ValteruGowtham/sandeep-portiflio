import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: '100+ LeetCode Problems',
    description: 'Solved over 100 problems on LeetCode with a focus on Data Structures and Algorithms, covering arrays, trees, graphs, DP, and more.',
    icon: '🏆',
  },
  {
    title: 'Cloud Computing – NPTEL',
    description: 'Completed NPTEL certification in Cloud Computing, gaining knowledge in cloud architecture, services, and deployment models.',
    icon: '☁️',
  },
  {
    title: 'Generative AI – Coursera',
    description: 'Earned certification in Generative AI from Coursera, exploring LLMs, prompt engineering, and modern AI architectures.',
    icon: '🤖',
  },
  {
    title: 'DSA Training – Board Infinity',
    description: 'Successfully completed intensive Data Structures & Algorithms training program with focus on problem-solving and optimization.',
    icon: '💡',
  },
];

const stats = [
  { value: '100+', label: 'LeetCode Problems' },
  { value: '4+', label: 'Projects Built' },
  { value: '3', label: 'Certifications' },
  { value: '6.85', label: 'CGPA' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container overflow-hidden">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <Trophy className="w-3.5 h-3.5" />
            <span>Recognition</span>
          </div>
          <h2 className="section-title gradient-text">Achievements</h2>
          <p className="section-subtitle">
            Milestones and accomplishments along the way
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-2xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index}
              className="glass-card-static p-6 text-center fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[11px] text-[#606060] font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((a, index) => (
            <div key={index}
              className="glass-card p-7 fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.08}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {a.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-2">{a.title}</h3>
                  <p className="text-[#707070] text-sm leading-relaxed">{a.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
