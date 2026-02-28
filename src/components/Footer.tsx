import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import venusLogo from "@/assets/Venus_Logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-primary-foreground/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={venusLogo} alt="Venus Solutions Logo" className="h-9 w-auto" />
              <span className="font-heading text-lg font-bold text-primary-foreground">
                Venus Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              NMSDC Certified MBE | Woman-Owned Business
              <br />
              IT Software Consultancy & Implementation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/insights", label: "Insights" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-primary-foreground/60">3110 S 127 Ct, #311, Omaha, NE 68144</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:contact@venussolutionsusa.com" className="text-primary-foreground/60 hover:text-gold transition-colors">
                  contact@venussolutionsusa.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:4024138592" className="text-primary-foreground/60 hover:text-gold transition-colors">
                  402-413-8592
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-navy-deep transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Venus Solutions USA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
