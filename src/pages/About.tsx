import { motion } from "framer-motion";
import { Target, Eye, Handshake, Users, Award, Heart, Building } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const partnerReasons = [
  { icon: Target, title: "Meet Supplier Diversity Goals", desc: "Partner with an NMSDC Certified Minority Business Enterprise to fulfill your organization's supplier diversity requirements" },
  { icon: Heart, title: "Support Minority & Woman-Owned Business", desc: "Contribute to economic growth by partnering with a certified minority and woman-owned technology firm" },
  { icon: Award, title: "Gain a Certified Tech Partner", desc: "Access enterprise-grade IT solutions backed by nearly two decades of industry experience" },
  { icon: Users, title: "Advance DEI Initiatives", desc: "Strengthen your diversity, equity, and inclusion programs with a committed, certified partner" },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              About <span className="text-gradient-gold">Venus Solutions USA</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/70 leading-relaxed">
              An NMSDC Certified Minority Business Enterprise (MBE) and Woman-Owned Business committed to delivering innovative IT solutions that empower businesses worldwide. With headquarters in Omaha, NE and offices in Orange County, CA; Phoenix, AZ; and Chennai, India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To deliver high-quality IT solutions that empower businesses to achieve their strategic objectives while supporting supplier diversity and economic inclusion." },
              { icon: Eye, title: "Our Vision", text: "To be a trusted NMSDC Certified MBE IT consultancy partner for enterprises across the USA and India, known for innovation, reliability, and commitment to diversity." },
              { icon: Handshake, title: "Our Approach", text: "We act as an extension of our clients' teams, delivering tailored IT solutions that address unique business challenges with measurable impact." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i} className="bg-card rounded-lg p-8 border-l-4 border-gold shadow-card">
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">Industries We Serve</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-12 max-w-2xl mx-auto">Delivering specialized IT solutions across key industries</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-4">
            {["Healthcare", "Energy", "Higher Education", "Supply Chain", "Manufacturing"].map((ind, i) => (
              <motion.div key={ind} variants={fadeUp} custom={i} className="px-6 py-3 rounded-full bg-card border border-gold/20 text-foreground font-medium text-sm shadow-card flex items-center gap-2">
                <Building size={16} className="text-gold" />
                {ind}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
              Why Partner With Venus Solutions USA
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnerReasons.map((r, i) => (
              <motion.div key={r.title} variants={fadeUp} custom={i} className="flex gap-4 p-6 bg-card rounded-lg shadow-card">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <r.icon size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
