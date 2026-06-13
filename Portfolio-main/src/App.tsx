import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Cloud,
  Database,
  Brain,
  Terminal,
  Rocket,
  Star,
  ChevronDown,
  Send,
  MapPin,
  Calendar,
  BookOpen,
  Trophy,
  Target,
  Zap,
  Layers,
  Cpu,
  Globe,
} from 'lucide-react';

// Particle Background Component
const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 15 + Math.random() * 10,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Floating AI Elements
const FloatingElements = () => {
  const elements = [
    { icon: '🤖', top: '10%', left: '5%', delay: 0 },
    { icon: '⚡', top: '80%', left: '10%', delay: 1 },
    { icon: '🧠', top: '20%', right: '5%', delay: 2 },
    { icon: '💻', top: '70%', right: '10%', delay: 0.5 },
    { icon: '☁️', top: '50%', left: '3%', delay: 1.5 },
    { icon: '🔬', top: '60%', right: '5%', delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el, i) => (
        <div
          key={i}
          className={`absolute text-4xl opacity-10 ${i % 2 === 0 ? 'animate-float' : 'animate-float-reverse'}`}
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            animationDelay: `${el.delay}s`,
          }}
        >
          {el.icon}
        </div>
      ))}
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            KAS
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building the future with AI';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-grid overflow-hidden pt-20"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">Open to Opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="block text-white glow-text">KOMALI ALEKHYA</span>
          <span className="block gradient-text mt-2">SIDDHANI</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {['AI & ML Student', 'Aspiring AI Engineer', 'Cloud Enthusiast'].map(
            (role, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-medium text-gray-300"
              >
                {role}
              </span>
            )
          )}
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4 font-light">
          <span className="text-white font-medium">{displayText}</span>
          <span className="animate-pulse text-blue-500">|</span>
        </p>

        <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-12">
          Passionate about Artificial Intelligence, Machine Learning, Cloud Computing,
          and building impactful software solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="btn-primary group flex items-center gap-2"
          >
            <span className="flex items-center gap-2">
              View Projects
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="btn-secondary flex items-center gap-2"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon size={24} className="text-gray-400 hover:text-white transition-colors" />
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-600" />
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const stats = [
    { value: '9.06', label: 'CGPA', icon: Trophy },
    { value: '6+', label: 'Certifications', icon: Award },
    { value: '3+', label: 'Internships', icon: Briefcase },
    { value: '5+', label: 'Projects', icon: Code },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
            Get to Know Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="glass-card p-8 glow-blue">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-float">🤖</div>
                </div>
                <div className="absolute inset-0 shimmer" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="orbit-element absolute">
                      <Brain className="text-blue-400" size={32} />
                    </div>
                    <div
                      className="orbit-element absolute"
                      style={{ animationDelay: '-6s', animationDirection: 'reverse' }}
                    >
                      <Cloud className="text-purple-400" size={32} />
                    </div>
                    <div
                      className="orbit-element absolute"
                      style={{ animationDelay: '-12s' }}
                    >
                      <Code className="text-cyan-400" size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a <span className="text-white font-semibold">B.Tech student</span>{' '}
                specializing in{' '}
                <span className="gradient-text-blue font-semibold">
                  Artificial Intelligence and Machine Learning
                </span>{' '}
                with a CGPA of 9.06. I am passionate about AI, Machine Learning, Cloud
                Computing, and Software Development.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I continuously improve my skills through projects, certifications,
                internships, DSA practice, and hands-on learning. My goal is to build
                intelligent solutions that make a real impact.
              </p>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="text-yellow-400" size={20} />
                Currently
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Solving DSA problems',
                  'Practicing LeetCode',
                  'Exploring AI Agents',
                  'Building AI projects',
                  'Learning Cloud Technologies',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="glass-card p-4 text-center card-hover"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Academic Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 glow-purple card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />

            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <GraduationCap size={40} className="text-purple-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500">2021 - 2025</span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2">
                  B.Tech in Computer Science and Engineering
                </h4>
                <p className="text-lg gradient-text-blue font-semibold mb-1">
                  Specialization: Artificial Intelligence & Machine Learning
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-gray-500" />
                  <p className="text-gray-400">
                    Seshadri Rao Gudlavalleru Engineering College
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                  <Trophy size={18} className="text-yellow-400" />
                  <span className="text-lg font-bold text-white">CGPA: 9.06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'Java', 'C'],
    },
    {
      title: 'AI & ML',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: ['Machine Learning', 'Scikit-Learn', 'Pandas', 'NumPy'],
    },
    {
      title: 'Cloud & AI',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      skills: ['AWS', 'Generative AI'],
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      skills: ['HTML', 'CSS'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-500 to-yellow-500',
      skills: ['SQL', 'DBMS'],
    },
    {
      title: 'Tools',
      icon: Terminal,
      color: 'from-pink-500 to-rose-500',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
    },
  ];

  return (
    <section id="skills" className="py-32 relative bg-grid">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-cyan-400 mb-4">
            What I Know
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon
                    size={24}
                    className="text-white group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Air Writing Project',
      description:
        'An AI-powered computer vision project that recognizes handwritten text written in air using machine learning and image processing techniques. Features real-time gesture recognition and character prediction.',
      technologies: ['Python', 'Computer Vision', 'Machine Learning', 'OpenCV'],
      featured: true,
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'MedTrack',
      description:
        'Cloud-based healthcare management system for patient record tracking developed during AWS internship. Implements secure data handling and dashboard analytics.',
      technologies: ['AWS', 'Cloud Computing', 'Database Systems', 'Python'],
      featured: false,
      icon: Cloud,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
            Featured Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`glass-card p-8 card-hover group ${
                project.featured ? 'glow-blue' : ''
              }`}
            >
              {project.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-yellow-400" size={16} />
                  <span className="text-sm text-yellow-400 font-medium">
                    Featured Project
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 flex items-center justify-center">
                  <div
                    className={`p-8 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-20 group-hover:scale-105 transition-transform`}
                  >
                    <project.icon size={64} className="text-white" />
                  </div>
                </div>

                <div className="lg:w-3/4">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-blue-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const certifications = [
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      icon: Award,
      color: '#f97316',
    },
    {
      title: 'Programming Through Java',
      issuer: 'NPTEL',
      icon: BookOpen,
      color: '#3b82f6',
    },
    {
      title: 'Fundamentals of Machine Learning',
      issuer: 'Saylor Academy',
      icon: Brain,
      color: '#a855f7',
    },
    {
      title: 'Kaggle Python Certificate',
      issuer: 'Kaggle',
      icon: Code,
      color: '#06b6d4',
    },
    {
      title: 'Generative AI Foundations',
      issuer: 'AWS Academy',
      icon: Cpu,
      color: '#22c55e',
    },
    {
      title: 'AWS Cloud Computing',
      issuer: 'Virtual Internship',
      icon: Cloud,
      color: '#ef4444',
    },
  ];

  const internships = [
    {
      title: 'APSCHE AI & ML Virtual Internship',
      period: '2024',
      icon: Layers,
    },
    {
      title: 'FlexCoder Internship',
      period: '2024',
      icon: Rocket,
    },
    {
      title: 'AWS Cloud Computing Virtual Internship',
      period: '2024',
      icon: Cloud,
    },
  ];

  const currentLearning = [
    { title: 'Data Structures & Algorithms', icon: Layers },
    { title: 'LeetCode Problem Solving', icon: Target },
    { title: 'AI Agents', icon: Brain },
    { title: 'Google 5-Day AI Agents Intensive', icon: Rocket },
    { title: 'Generative AI', icon: Cpu },
  ];

  const achievements = [
    'CGPA 9.06',
    'AWS Certified AI Practitioner',
    'NPTEL Java Score: 97%',
    'ML Certification: 100%',
    'Active LeetCode Learner',
    'AI & ML Enthusiast',
  ];

  return (
    <section id="experience" className="py-32 relative bg-grid">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Journey & Growth
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & Achievements
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certifications Column */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-yellow-400" size={22} />
              Certifications
            </h4>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card p-4 card-hover group relative overflow-hidden"
                >
                  <div className="flex items-start gap-3">
                    <cert.icon className="w-8 h-8 flex-shrink-0 mt-0.5" style={{ color: cert.color }} />
                    <div>
                      <h5 className="text-base font-semibold text-white mb-1">
                        {cert.title}
                      </h5>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships & Learning Column */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-blue-400" size={22} />
                Internships
              </h4>
              <div className="space-y-4">
                {internships.map((intern) => (
                  <div
                    key={intern.title}
                    className="glass-card p-4 card-hover flex items-center gap-3"
                  >
                    <div className="p-2.5 rounded-lg bg-blue-500/20">
                      <intern.icon className="text-blue-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-medium text-sm">{intern.title}</h5>
                      <p className="text-xs text-gray-500">{intern.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="text-purple-400" size={22} />
                Currently Learning
              </h4>
              <div className="space-y-3">
                {currentLearning.map((item) => (
                  <div
                    key={item.title}
                    className="glass-card p-3 card-hover flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                      <item.icon className="text-purple-400" size={18} />
                    </div>
                    <span className="text-white text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Trophy className="text-yellow-400" size={22} />
              Achievements
            </h4>
            <div className="space-y-3">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="glass-card p-4 flex items-center gap-3 card-hover"
                >
                  <Star className="text-yellow-400 flex-shrink-0" size={18} />
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// GitHub Stats Section
const GitHubStats = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-green-400 mb-4">
            Open Source
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GitHub Activity
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="glass-card p-8 glow-purple">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-400">Contributions</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-400">Repositories</div>
            </div>
            <div>
              <div class="text-4xl font-bold gradient-text mb-2">Active</div>
              <div className="text-gray-400">Status</div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
              View GitHub Profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-32 relative bg-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact me
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Interested in collaboration or have an opportunity? I'd love to hear from
            you. Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 glow-blue">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-center text-sm text-gray-500 mb-4">
                Or reach out directly
              </p>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                    aria-label={label}
                  >
                    <Icon size={20} className="text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-400 text-sm">
              Designed & Built by{' '}
              <span className="text-white font-medium">Komali Alekhya Siddhani</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">
            © 2024 Komali Alekhya Siddhani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <ParticleBackground />
      <FloatingElements />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubStats />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
