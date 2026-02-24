import { useState } from 'react';
import { Layers, Calendar, Github } from 'lucide-react';

const projects = [
  {
    title: 'Library Management System',
    category: 'DSA',
    period: 'Nov 2024 – Dec 2024',
    description: 'Console-based Library Management System integrating arrays and linked lists for efficient record storage and retrieval with full CRUD operations.',
    highlights: [
      'Engineered CRUD pipeline with optimized search and sorting mechanisms',
      'Implemented file handling for persistent data storage',
      'Improved system reliability and retrieval efficiency',
    ],
    technologies: ['C++', 'DSA', 'File Handling', 'OOP'],
    codeUrl: 'https://github.com/balasandeep',
  },
  {
    title: 'Heart Disease Prediction System',
    category: 'ML',
    period: 'Sep 2024 – Nov 2024',
    description: 'Machine learning-based Heart Disease Prediction System using Artificial Neural Networks for clinical risk assessment across 13 clinical attributes.',
    highlights: [
      'Achieved ~80% classification accuracy with ANN model',
      'Built end-to-end ML pipeline: preprocessing, scaling, training & evaluation',
      'Improved performance through feature engineering and hyperparameter tuning',
    ],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Neural Networks'],
    codeUrl: 'https://github.com/balasandeep',
  },
  {
    title: 'Clash of Clans Object Detection',
    category: 'CV',
    period: 'Mar 2024 – Apr 2024',
    description: 'Real-time object detection system using YOLOv11 architecture to identify in-game elements like buildings, troops, and spells with live webcam inference.',
    highlights: [
      'Custom dataset creation and annotation via Roboflow',
      'GPU-accelerated training with pretrained YOLOv11 weights',
      'Live webcam-based detection with OpenCV bounding box visualization',
    ],
    technologies: ['YOLOv11', 'OpenCV', 'Roboflow', 'Google Colab'],
    codeUrl: 'https://github.com/balasandeep',
  },
  {
    title: 'News Article Recommendation System',
    category: 'NLP',
    period: 'May 2025',
    description: 'Content-based recommendation engine using TF-IDF vectorization to convert unstructured news data into numerical features with NLP preprocessing.',
    highlights: [
      'TF-IDF vectorization for feature representation',
      'NLP preprocessing: tokenization, stop-word removal, normalization',
      'Deployed as interactive Streamlit web app with real-time recommendations',
    ],
    technologies: ['Python', 'NLP', 'TF-IDF', 'Streamlit'],
    codeUrl: 'https://github.com/balasandeep',
  },
];

const categories = ['All', 'DSA', 'ML', 'CV', 'NLP'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-container overflow-hidden">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge">
            <Layers className="w-3.5 h-3.5" />
            <span>Projects</span>
          </div>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my work across different domains
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-md text-[13px] font-medium transition-all duration-300"
              style={{
                background: activeCategory === cat ? '#ffffff' : 'rgba(255,255,255,0.04)',
                color: activeCategory === cat ? '#0f0f0f' : '#707070',
                border: activeCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <div key={project.title}
              className="glass-card p-8 fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider"
                  style={{ background: 'rgba(255,255,255,0.06)', color: '#909090', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {project.category}
                </span>
                <span className="flex items-center gap-1 text-[#505050] text-xs">
                  <Calendar className="w-3 h-3" />{project.period}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-white font-semibold text-[17px] mb-3 leading-snug">{project.title}</h3>
              <p className="text-[#707070] text-sm leading-relaxed mb-6">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#808080]">
                    <span className="w-1 h-1 rounded-full bg-white/25 mt-2 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span key={tech}
                    className="px-3 py-1 rounded-md text-[11px] font-medium text-[#707070]"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#707070] hover:text-white/80 transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> View Source
              </a>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a href="https://github.com/balasandeep" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white/70 transition-all duration-300 hover:bg-white/5"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Github className="w-4 h-4" /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
