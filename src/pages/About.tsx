import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, Award, Users } from "lucide-react";
import aboutTeamImg from "@/assets/about-team.jpg";
import { GridPattern, FloatingDots, GlowOrb, CircuitPattern } from "@/components/DecorativeElements";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const deliveryPrinciples = [
  "Strategic clarity",
  "Strong architecture",
  "Structured execution",
  "Risk management discipline",
  "Transparent communication",
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-hero-gradient pt-32 pb-20 overflow-hidden">
        <GridPattern className="inset-0 text-primary-foreground" />
        <FloatingDots count={6} />
        <GlowOrb className="w-96 h-96 bg-gold/5 -top-48 -right-48" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              About <span className="text-gradient-gold">Venus Solutions LLC</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/70 leading-relaxed">
              A certified Minority Business Enterprise delivering enterprise-grade technology solutions with accountability, governance, and measurable ROI.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Image Banner */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-lg overflow-hidden shadow-card-hover">
            <img src={aboutTeamImg} alt="Venus Solutions team collaborating on enterprise technology" className="w-full h-72 md:h-96 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0} className="bg-card rounded-lg p-8 border-l-4 border-gold shadow-card">
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <Target size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To deliver enterprise-grade technology solutions that drive measurable business impact while advancing inclusive and diverse supplier ecosystems.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="bg-card rounded-lg p-8 border-l-4 border-gold shadow-card">
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <Eye size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To become a trusted technology partner for organizations seeking scalable digital transformation with accountability, governance, and measurable ROI.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Philosophy */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <CircuitPattern className="bottom-0 left-0 opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Delivery Philosophy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe successful technology initiatives require discipline, transparency, and architectural leadership.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {deliveryPrinciples.map((p, i) => (
                <motion.div key={p} variants={fadeUp} custom={i} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-card">
                  <CheckCircle2 size={20} className="text-gold shrink-0" />
                  <span className="text-foreground text-sm font-medium">{p}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={2} className="bg-card rounded-lg p-8 shadow-card border-l-4 border-gold">
              <p className="text-muted-foreground leading-relaxed">
                Our hybrid model combines in-house architectural leadership with scalable partner alliances, enabling us to execute complex engagements without compromising quality or governance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background relative overflow-hidden">
        <GlowOrb className="w-72 h-72 bg-gold/5 -bottom-36 -right-36" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Certifications & Supplier Diversity</h2>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="space-y-6">
              <div className="bg-card rounded-lg p-8 shadow-card border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Award size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">NMSDC Certified MBE</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Venus Solutions LLC is certified as a Minority Business Enterprise (MBE) through the National Minority Supplier Development Council (NMSDC). We support private-sector supplier diversity initiatives by delivering enterprise-grade technology services while contributing to inclusive procurement objectives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-card border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Users size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Woman-Owned Business</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We are proudly woman-owned, reinforcing our commitment to leadership diversity in the technology sector.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
