import { Code, Brain, Eye, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: [
      { name: 'Python', emoji: '🐍' },
      { name: 'C++', emoji: '⚡' },
      { name: 'Java', emoji: '☕' },
      { name: 'SQL', emoji: '🗄️' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', emoji: '🧠' },
      { name: 'Scikit-learn', emoji: '🤖' },
      { name: 'Neural Networks', emoji: '🔬' },
      { name: 'NLP', emoji: '💬' },
    ],
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    skills: [
      { name: 'YOLOv11', emoji: '👁️' },
      { name: 'OpenCV', emoji: '📷' },
      { name: 'Roboflow', emoji: '🏷️' },
      { name: 'Object Detection', emoji: '🎯' },
    ],
  },
  {
    title: 'Core & Tools',
    icon: Wrench,
    skills: [
      { name: 'DSA', emoji: '🌳' },
      { name: 'OOP', emoji: '📦' },
      { name: 'Pandas', emoji: '🐼' },
      { name: 'NumPy', emoji: '🔢' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container overflow-hidden">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title gradient-text">Skills & Technologies</h2>
          <p className="section-subtitle">
            My technical toolkit for building efficient solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.title}
                className="glass-card p-8 fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <CategoryIcon className="w-4.5 h-4.5 text-white/70" />
                  </div>
                  <h3 className="text-white font-semibold text-[15px]">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}
                      className="group flex items-center gap-2.5 py-2.5 px-4 rounded-lg transition-all duration-300 hover:bg-white/[0.04] cursor-default"
                      style={{ border: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      <span className="text-base">{skill.emoji}</span>
                      <span className="text-[13px] font-medium text-[#a0a0a0] group-hover:text-white/80 transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
