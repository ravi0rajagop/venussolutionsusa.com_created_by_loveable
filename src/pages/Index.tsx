import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Cloud, BarChart3, Code2, Shield, Users, Award, ArrowRight, CheckCircle2, Landmark, Target, Handshake, Quote, Zap, Eye, Wrench, BarChart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import whyVenusImg from "@/assets/why-venus.jpg";
import aboutTeamImg from "@/assets/about-team.jpg";
import { GridPattern, FloatingDots, GlowOrb, CircuitPattern } from "@/components/DecorativeElements";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Production-ready AI systems engineered for measurable business outcomes.", to: "/services/ai-ml" },
  { icon: Cloud, title: "Cloud Transformation", desc: "Secure cloud architecture, migration, and modernization at enterprise scale.", to: "/services/cloud" },
  { icon: BarChart3, title: "Data Engineering & Analytics", desc: "High-performance data platforms that power strategic decisions.", to: "/services/data" },
  { icon: Code2, title: "Application Development & Managed Services", desc: "Custom software solutions designed for scalability and long-term maintainability.", to: "/services/app-dev" },
];

const whyUs = [
  { icon: Wrench, title: "Hands-On Architecture & Delivery", desc: "We don't just advise — we architect, build, and deploy. Our principals lead engagements directly, ensuring technical excellence from strategy through production." },
  { icon: BarChart, title: "Deep Enterprise Data Expertise", desc: "19+ years specializing in ETL modernization, data warehousing, and complex system integrations across higher education, healthcare, and financial services." },
  { icon: Zap, title: "Startup Agility, Enterprise Governance", desc: "We move fast without cutting corners. Structured delivery frameworks, risk controls, and transparent communication at every stage." },
  { icon: Target, title: "Business-Outcome Focused Execution", desc: "Every engagement is measured by ROI, not billable hours. We align technology investments to revenue growth, cost reduction, and operational efficiency." },
  { icon: Handshake, title: "Long-Term Partnership Mindset", desc: "We invest in understanding your business deeply. Our clients stay because we deliver consistently — not because of contracts." },
  { icon: Shield, title: "Cost-Effective Enterprise Solutions", desc: "Get Accenture-level strategy and execution at a fraction of the cost. Boutique focus means lower overhead and higher value per dollar." },
  { icon: Award, title: "NMSDC Certified MBE & Woman-Owned", desc: "Advance your supplier diversity objectives while partnering with a firm that delivers enterprise-grade results." },
];

const uspPillars = [
  { title: "Boutique Firm, Enterprise Expertise", desc: "We combine the personalized service of a boutique consultancy with the deep technical capabilities typically found only at large firms." },
  { title: "Architect-Led, Implementation-Focused", desc: "Our senior architects don't just design solutions — they build them. No hand-offs to junior teams. No disconnect between strategy and execution." },
  { title: "Bridge Between Business & Technology", desc: "We translate complex technical requirements into business outcomes that executives can measure, and business goals into architectures that engineers can build." },
  { title: "Scalable Solutions Designed for Growth", desc: "Every system we build is designed to scale. From data platforms processing millions of records to cloud architectures supporting global operations." },
];

const testimonials = [
  { quote: "Venus Solutions demonstrated strong architectural leadership and execution discipline. Their structured approach gave us confidence throughout our transformation initiative.", author: "Director of Technology", org: "Private Healthcare Network" },
  { quote: "The team delivered enterprise-level strategy with startup agility. Their governance framework minimized risk while accelerating delivery.", author: "VP Engineering", org: "SaaS Organization" },
  { quote: "They approached our data modernization initiative with clarity, depth, and measurable impact.", author: "Chief Data Officer", org: "Financial Services Firm" },
];

const stats = [
  { value: "19+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "50+", label: "Qualified Consultants" },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      <GridPattern className="inset-0 text-primary-foreground" />
      <FloatingDots count={10} />
      <GlowOrb className="w-[500px] h-[500px] bg-gold/5 -top-64 -right-64" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-navy-light/30 backdrop-blur mb-8">
            <Award size={16} className="text-gold" />
            <span className="text-sm text-gold font-medium">NMSDC Certified MBE & Woman-Owned Business</span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Enterprise-Grade Technology Solutions.{" "}
            <span className="text-gradient-gold">Built for Scale. Delivered with Precision.</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/70 max-w-2xl mb-4 leading-relaxed">
            Venus Solutions LLC is a certified Minority Business Enterprise (MBE) delivering AI/ML, Cloud, Data Analytics, and Application Development services to mid-market and enterprise organizations.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-base text-gold/80 font-medium">
            Architect-led. Outcome-driven. Enterprise-ready.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Certification Banner */}
    <section className="bg-gold-gradient py-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 text-navy-deep">
        <div className="flex items-center gap-2 font-semibold text-sm"><CheckCircle2 size={18} /> NMSDC Certified MBE</div>
        <div className="flex items-center gap-2 font-semibold text-sm"><CheckCircle2 size={18} /> Minority-Led & Woman-Owned</div>
        <div className="flex items-center gap-2 font-semibold text-sm"><CheckCircle2 size={18} /> IT Software Consultancy & Implementation</div>
      </div>
    </section>

    {/* Who We Are — with image */}
    <section className="relative py-20 bg-background overflow-hidden">
      <CircuitPattern className="top-0 right-0 opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Venus Solutions LLC is a technology consulting and implementation firm focused on designing and delivering secure, scalable, and performance-driven digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We operate with startup agility while applying enterprise governance, structured delivery frameworks, and scalable strategic partnerships to support complex technology initiatives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Certified by the National Minority Supplier Development Council (NMSDC), we help organizations achieve both digital transformation and supplier diversity objectives.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="rounded-lg overflow-hidden shadow-card-hover">
            <img src={aboutTeamImg} alt="Venus Solutions team collaborating on enterprise technology solutions" className="w-full h-auto object-cover rounded-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Services Snapshot */}
    <section className="relative py-20 bg-muted/50 overflow-hidden">
      <GlowOrb className="w-72 h-72 bg-gold/5 -bottom-36 -left-36" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Core Services</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} custom={i}>
              <Link to={s.to} className="group block bg-card rounded-lg p-6 border-l-4 border-gold shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <s.icon size={24} className="text-gold group-hover:text-navy-deep transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Why Venus Solutions — enhanced */}
    <section className="relative py-20 bg-background overflow-hidden">
      <CircuitPattern className="bottom-0 left-0 opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-6">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Leading Organizations Choose Venus Solutions
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In a market crowded with generalist consulting firms and offshore outsourcing, Venus Solutions stands apart. We bring hands-on solution architecture, deep data expertise, and enterprise execution discipline — delivering measurable ROI without the overhead of a Big Four engagement.
          </motion.p>
        </motion.div>

        {/* Image banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="rounded-lg overflow-hidden mb-12 max-w-5xl mx-auto shadow-card-hover">
          <img src={whyVenusImg} alt="Enterprise technology partnership" className="w-full h-64 object-cover" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whyUs.map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} custom={i} className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-card border-l-4 border-gold hover:shadow-card-hover transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust closing */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed italic border-l-4 border-gold pl-6 text-left">
            When you partner with Venus Solutions, you're not hiring a vendor — you're gaining a technology ally invested in your long-term success. We measure our performance by your outcomes, and we don't stop until the job is done right.
          </p>
        </motion.div>
      </div>
    </section>

    {/* USP Section */}
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <GlowOrb className="w-96 h-96 bg-gold/5 -top-48 -left-48" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Sets Us Apart
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Venus Solutions LLC is a high-impact, execution-driven technology consulting partner that specializes in transforming complex enterprise data environments into streamlined, scalable, and insight-driven systems.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {uspPillars.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} custom={i} className="bg-card rounded-lg p-8 shadow-card border-t-4 border-gold hover:shadow-card-hover transition-all duration-300">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mt-12 text-center">
          <div className="bg-navy-deep rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="font-heading font-semibold text-xl text-primary-foreground mb-3">Why It Matters to Clients</h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              CIOs and IT Directors choose Venus Solutions because we deliver the strategic depth of a premium consultancy with the speed and accountability of an execution partner. Our clients get direct access to senior architects, transparent project governance, and solutions built for measurable ROI — not just impressive slide decks.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-hero-gradient relative overflow-hidden">
      <GridPattern className="inset-0 text-primary-foreground" />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Let's Build <span className="text-gradient-gold">What's Next</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/70 mb-8 text-lg">
            Schedule a strategic consultation to discuss your technology objectives.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-gold-gradient text-navy-deep font-semibold hover:opacity-90 transition-opacity">
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-gold/40 text-primary-foreground font-semibold hover:bg-gold/10 transition-colors">
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} custom={i} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">{s.value}</div>
              <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="relative py-20 bg-muted/50 overflow-hidden">
      <GlowOrb className="w-72 h-72 bg-gold/5 -top-36 -right-36" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Client Testimonials</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp} custom={i} className="bg-card rounded-lg p-8 shadow-card border-t-4 border-gold relative hover:shadow-card-hover transition-all duration-300">
              <Quote size={32} className="text-gold/20 absolute top-4 right-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.org}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-20 bg-gold-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-deep mb-4">Ready to Transform Your Business?</h2>
        <p className="text-navy-deep/70 mb-8 text-lg">Schedule a strategic consultation today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors">
            Contact Us <ArrowRight size={18} />
          </Link>
          <a href="mailto:contact@venussolutionsusa.com" className="inline-flex items-center gap-2 px-8 py-4 rounded border-2 border-navy-deep text-navy-deep font-semibold hover:bg-navy-deep/10 transition-colors">
            contact@venussolutionsusa.com
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Index;
