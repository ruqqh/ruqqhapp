import { motion } from "motion/react";
import { 
  BarChart3, 
  Target, 
  Zap, 
  MessageSquare, 
  Globe, 
  ShieldCheck,
  Settings,
  ArrowRight,
  Menu,
  X,
  Star,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-bg/80 backdrop-blur-xl z-50 border-b border-white/10 px-6 lg:px-14">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black font-display tracking-tight text-ink uppercase">RUQQH<span className="text-accent">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-[12px] font-semibold text-subtle hover:text-ink uppercase tracking-[0.15em] transition-colors">Services</a>
            <a href="#case-studies" className="text-[12px] font-semibold text-subtle hover:text-ink uppercase tracking-[0.15em] transition-colors">Case Studies</a>
            <a href="#about" className="text-[12px] font-semibold text-subtle hover:text-ink uppercase tracking-[0.15em] transition-colors">About</a>
            <a href="#contact" className="text-[12px] font-semibold text-ink uppercase tracking-[0.15em] border border-white px-5 py-2 hover:bg-white hover:text-bg transition-all">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ink">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg border-b border-white/10 px-6 pt-4 pb-10 space-y-4 shadow-2xl"
        >
          <a href="#services" className="block text-sm font-semibold text-subtle uppercase tracking-widest">Services</a>
          <a href="#case-studies" className="block text-sm font-semibold text-subtle uppercase tracking-widest">Case Studies</a>
          <a href="#about" className="block text-sm font-semibold text-subtle uppercase tracking-widest">About</a>
          <a href="#contact" className="block text-sm font-semibold text-ink uppercase tracking-widest">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 lg:px-14 bg-bg overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[12vw] lg:text-[140px] font-black font-display text-ink leading-[0.85] tracking-[-0.04em] uppercase mb-12">
            Systems<br />
            Built <span className="text-accent">Secure</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-end mt-8 border-t border-white/10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg lg:text-xl text-subtle leading-normal max-w-[320px]">
              We architect resilient software, secure systems, and high-performance infrastructure for the modern tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button className="border border-ink px-10 py-6 text-sm lg:text-base font-bold uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-bg transition-all w-full lg:w-fit whitespace-nowrap">
              Secure Your Stack
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-end border-b border-white/10 pb-3">
              <span className="text-[11px] font-semibold text-subtle uppercase tracking-widest">Deployments</span>
              <span className="text-xl font-bold text-ink">1,240+</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/10 pb-3">
              <span className="text-[11px] font-semibold text-subtle uppercase tracking-widest">Uptime Avg.</span>
              <span className="text-xl font-bold text-ink">99.99%</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/10 pb-3">
              <span className="text-[11px] font-semibold text-subtle uppercase tracking-widest">Threats Blocked</span>
              <span className="text-xl font-bold text-ink">2.4M</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Software Engineering",
      desc: "Custom-tailored scalable applications designed to streamline complex business logic.",
      icon: Zap
    },
    {
      title: "Cyber Security",
      desc: "Impregnable defense systems to protect your vital data from evolving global threats.",
      icon: ShieldCheck
    },
    {
      title: "System Architecture",
      desc: "Robust infrastructure planning and deployment for high-availability environments.",
      icon: Target
    },
    {
      title: "Web Ecosystems",
      desc: "Fast, responsive, and secure web applications built with the latest technical stacks.",
      icon: Globe
    },
    {
      title: "OS Optimization",
      desc: "Deep-level kernel tuning and cross-platform support for Linux, Windows, macOS, and custom real-time OS.",
      icon: Settings
    },
    {
      title: "Cloud Performance",
      desc: "Optimizing cloud instances and data pipelines for maximum computational efficiency.",
      icon: BarChart3
    }
  ];

  return (
    <section id="services" className="py-32 bg-bg border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="mb-24">
          <h2 className="text-accent font-black tracking-widest uppercase text-xs mb-6 px-1 border-l-2 border-accent">Expertise</h2>
          <p className="text-5xl lg:text-7xl font-display font-black text-ink uppercase tracking-tight max-w-3xl leading-none">
            Cutting through <br /> the noise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-8 overflow-hidden inline-block pr-6 border-b border-white/10 pb-2">
                <div className="flex items-center gap-4 mb-2">
                  <service.icon className="h-6 w-6 text-accent" />
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-black text-ink uppercase tracking-tight group-hover:text-accent transition-colors">{service.title}</h3>
              </div>
              <p className="text-subtle leading-relaxed text-lg max-w-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const benefits = [
    "Expert engineers with cross-OS mastery",
    "Security-first development approach",
    "High-performance architecture",
    "Impregnable cyber defense protocols",
    "24/7 technical infrastructure support"
  ];

  return (
    <section id="about" className="py-32 bg-bg overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Tech Infrastructure"
                className="w-full h-[700px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-10 left-10">
              <div className="bg-accent p-10 text-white shadow-2xl">
                <div className="text-6xl font-black mb-1 leading-none">24/7</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80 mt-4">System <br /> Monitoring</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-20 lg:mt-0"
          >
            <h2 className="text-accent font-black tracking-widest uppercase text-xs mb-8 border-l-2 border-accent px-1">Heritage</h2>
            <p className="text-5xl lg:text-7xl font-display font-black text-ink mb-12 uppercase leading-none tracking-tight">
              Engineering the <br /> next generation.
            </p>
            <p className="text-xl text-subtle mb-12 leading-relaxed font-medium">
              Founded in 2018, RUQQH was born from a singular mission: to build digital infrastructure that never fails. We provide the technical backbone for companies that require absolute resilience, from software systems to perimeter security.
            </p>
            <ul className="space-y-6 mb-16">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-ink font-bold uppercase text-sm tracking-widest border-b border-white/5 pb-4">
                  <span className="text-accent mr-4">/</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <button className="border border-ink px-10 py-6 font-bold uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-bg transition-all">
              Meet the Squad
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO at Nexus Tech",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content: "RUQQH completely overhauled our system architecture. Our latency dropped by 60% and we haven't seen a single security breach since implementation."
    },
    {
      name: "Marcus Thorne",
      role: "Lead Architect at Thorne Labs",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      content: "Their expertise in cybersecurity is unparalleled. RUQQH doesn't just patch holes; they build impenetrable walls for our enterprise data."
    },
    {
      name: "Lena Rodriguez",
      role: "VP of Engineering at Global Systems",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      content: "The OS support RUQQH provided was a game changer for our cross-platform fleet. They are truly technical masters of their craft."
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="mb-24">
          <h2 className="text-accent font-black tracking-widest uppercase text-xs mb-6 px-1 border-l-2 border-accent">Endorsements</h2>
          <p className="text-4xl font-display font-black text-ink uppercase tracking-tight italic">"The benchmark for growth engineering"</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-white/10 p-12 relative group hover:border-accent transition-colors duration-500"
            >
              <div className="flex gap-1 mb-8 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-xl text-ink leading-relaxed mb-12 italic font-medium">
                "{t.content}"
              </p>
              <div className="flex items-center gap-5 pt-10 border-t border-white/5">
                <img src={t.img} alt={t.name} className="w-16 h-16 grayscale rounded-none object-cover border border-white/10" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-black text-ink uppercase tracking-widest text-sm">{t.name}</div>
                  <div className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-bg border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="lg:grid lg:grid-cols-2 lg:gap-32">
          <div className="mb-20 lg:mb-0">
            <h2 className="text-accent font-black tracking-widest uppercase text-xs mb-8 border-l-2 border-accent px-1">Connect</h2>
            <p className="text-5xl lg:text-7xl font-display font-black text-ink mb-12 uppercase leading-none tracking-tight">
              Secure your <br /> future.
            </p>
            <p className="text-xl text-subtle mb-16 max-w-md leading-relaxed">
              Our engineers are ready to audit your stack and architect a protocol for total system integrity.
            </p>
            
            <div className="space-y-12">
              <div className="group">
                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-3">Protocol</div>
                <div className="text-2xl font-black text-ink uppercase tracking-tight group-hover:text-accent transition-colors">ruqqhco@gmail.com</div>
              </div>
              <div className="group">
                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-3">Phone</div>
                <div className="text-2xl font-black text-ink uppercase tracking-tight group-hover:text-accent transition-colors">+254 704 111 223</div>
              </div>
              <div className="group">
                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-3">Studio</div>
                <div className="text-2xl font-black text-ink uppercase tracking-tight group-hover:text-accent transition-colors">NAKURU MILIMANI</div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 p-12 lg:p-16">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="border-b border-white/10 pb-4">
                  <label className="block text-[10px] font-bold text-subtle uppercase tracking-widest mb-4">First Name</label>
                  <input type="text" className="w-full bg-transparent text-ink placeholder-white/20 outline-none font-bold" placeholder="JOHN" />
                </div>
                <div className="border-b border-white/10 pb-4">
                  <label className="block text-[10px] font-bold text-subtle uppercase tracking-widest mb-4">Last Name</label>
                  <input type="text" className="w-full bg-transparent text-ink placeholder-white/20 outline-none font-bold" placeholder="DOE" />
                </div>
              </div>
              <div className="border-b border-white/10 pb-4">
                <label className="block text-[10px] font-bold text-subtle uppercase tracking-widest mb-4">Email</label>
                <input type="email" className="w-full bg-transparent text-ink placeholder-white/20 outline-none font-bold" placeholder="CLIENT@RUQQH.CO" />
              </div>
              <div className="border-b border-white/10 pb-4">
                <label className="block text-[10px] font-bold text-subtle uppercase tracking-widest mb-4">Inquiry</label>
                <select className="w-full bg-transparent text-ink outline-none font-bold uppercase appearance-none">
                  <option className="bg-bg">Software Engineering</option>
                  <option className="bg-bg">Cyber Security</option>
                  <option className="bg-bg">System Architecture</option>
                  <option className="bg-bg">OS Support</option>
                </select>
              </div>
              <div className="border-b border-white/10 pb-4">
                <label className="block text-[10px] font-bold text-subtle uppercase tracking-widest mb-4">Brief</label>
                <textarea rows={1} className="w-full bg-transparent text-ink placeholder-white/20 outline-none font-bold resize-none" placeholder="DESCRIBE YOUR OBJECTIVES..."></textarea>
              </div>
              <button className="w-full bg-ink text-bg py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all shadow-2xl">
                Initiate Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-black font-display tracking-tight text-ink uppercase">RUQQH<span className="text-accent">.</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {["Services", "Case Studies", "About", "Team", "Contact"].map(item => (
              <a key={item} href="#" className="text-[10px] font-bold text-subtle hover:text-ink uppercase tracking-[0.2em] transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex space-x-6">
            {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="text-subtle hover:text-accent transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 text-[10px] font-bold text-subtle/50 uppercase tracking-[0.3em]">
          <div className="text-center md:text-left mb-4 md:mb-0">
            KERNEL / CLOUD / CYBER / DEV OPS / ARCHITECTURE
          </div>
          <div>
            &copy; 2024 RUQQH SYSTEMS PROTOCOL
          </div>
        </div>
      </div>
    </footer>
  );
};

const CaseStudies = () => {
  const projects = [
    {
      title: "Maison Mock",
      category: "PropTech / Asset Management",
      desc: "A comprehensive property management system designed for commercial agencies to automate leases, maintenance, and tenant relations.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      stats: "Live on GitHub",
      url: "https://ruqqh.github.io/maisonmock/"
    },
    {
      title: "Perimeter Protocol",
      category: "Endpoint Security",
      desc: "Distributed threat detection system for enterprise-level cloud infrastructure, reducing response times by 85%.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200",
      stats: "99.9% Uptime",
      url: "#"
    }
  ];

  return (
    <section id="case-studies" className="py-32 bg-bg border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="mb-24">
          <h2 className="text-accent font-black tracking-widest uppercase text-xs mb-6 px-1 border-l-2 border-accent">Portfolio</h2>
          <p className="text-5xl lg:text-7xl font-display font-black text-ink uppercase tracking-tight max-w-3xl leading-none">
            Proven <br /> Architectures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <a href={project.url} target={project.url.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="block cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden border border-white/10 mb-8">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-accent px-4 py-2 text-[10px] font-bold text-white uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-black text-ink uppercase tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] pt-2">{project.stats}</span>
                </div>
                <p className="text-subtle text-lg max-w-xl leading-relaxed">
                  {project.desc}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function BusinessLanding() {
  return (
    <div className="antialiased font-sans selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
