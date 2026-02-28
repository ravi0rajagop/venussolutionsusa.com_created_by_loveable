import { motion } from "framer-motion";
import { Cloud, ChevronRight, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { GridPattern, FloatingDots, GlowOrb } from "@/components/DecorativeElements";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const capabilities = [
  "Cloud strategy & roadmap development",
  "Infrastructure assessment",
  "Cloud migration (Lift-and-Shift, Re-platforming, Refactoring)",
  "Hybrid & multi-cloud architecture",
  "DevOps & CI/CD implementation",
  "Infrastructure as Code (IaC)",
  "Security & compliance architecture",
];

const governance = [
  "Migration sequencing & rollback planning",
  "Security audits",
  "Cost monitoring frameworks",
  "Identity & access controls",
  "Performance benchmarking",
];

const outcomes = [
  "Increased scalability & resilience",
  "Reduced infrastructure overhead",
  "Faster deployment cycles",
  "Improved security posture",
  "Cost transparency & optimization",
];

const CloudService = () => (
  <main>
    <section className="relative bg-hero-gradient pt-32 pb-20 overflow-hidden">
      <GridPattern className="inset-0 text-primary-foreground" />
      <FloatingDots count={8} />
      <GlowOrb className="w-96 h-96 bg-gold/5 -top-48 -right-48" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Link to="/services" className="inline-flex items-center gap-1 text-gold/70 hover:text-gold text-sm mb-6 transition-colors">
          <ArrowLeft size={14} /> All Services
        </Link>
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
              <Cloud size={28} className="text-gold" />
            </div>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Cloud Consulting & <span className="text-gradient-gold">Modernization</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-gold font-medium mb-4">Secure, Scalable Digital Infrastructure</motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-primary-foreground/70 leading-relaxed">
            We help organizations modernize legacy environments and transition to resilient cloud ecosystems designed for performance, security, and cost optimization.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="relative py-20 bg-background overflow-hidden">
      <GlowOrb className="w-72 h-72 bg-gold/5 -bottom-36 -right-36" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="bg-card rounded-lg p-8 shadow-card border-t-4 border-gold">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-6">Our Cloud Services</h2>
            <div className="space-y-3">
              {capabilities.map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm text-foreground group">
                  <ChevronRight size={14} className="text-gold shrink-0 group-hover:translate-x-1 transition-transform" /> {c}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="bg-card rounded-lg p-8 shadow-card border-t-4 border-gold">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-6">Governance & Risk Controls</h2>
            <div className="space-y-3">
              {governance.map((g) => (
                <div key={g} className="flex items-center gap-3 text-sm text-foreground group">
                  <CheckCircle2 size={14} className="text-gold shrink-0" /> {g}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-heading font-semibold text-2xl text-foreground mb-6">Business Outcomes</motion.h2>
          <motion.div variants={fadeUp} custom={1} className="flex flex-wrap gap-3">
            {outcomes.map((o) => (
              <span key={o} className="px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20 text-foreground text-sm font-medium flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold" /> {o}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-gold-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-deep mb-4">Ready to Modernize Your Infrastructure?</h2>
        <p className="text-navy-deep/70 mb-8">Schedule a strategic consultation to discuss your cloud objectives.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors">
          Schedule a Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </main>
);

export default CloudService;
