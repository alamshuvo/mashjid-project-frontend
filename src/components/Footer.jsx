import { Link } from "react-router-dom";
import Button from "../utilsDesign/Button";

const Footer = () => {
  return (
    <footer className="mt-5"
    style={{
      backgroundImage: `
      linear-gradient(to bottom right, rgba(15, 23, 42, 0.10)),
      url('https://icliny.org/wp-content/uploads/2017/07/bg-18.jpg?id=1200')
    `
        .replace(/\s+/g, " ")
        .trim(),
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}>
      {/* Subtle golden glow at top */}
      <div className="" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Quote */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-amber-100 font-alumni">
                  Zubayr
                </h3>
                <p className="text-amber-300 text-sm -mt-1">Learning Center</p>
              </div>
            </div>
            <blockquote className="text-amber-200 italic text-sm leading-relaxed border-l-4 border-amber-500/50 pl-4">
              "The best of you are those who learn the Quran and teach it."
              <footer className="text-xs text-amber-300 mt-2 not-italic">
                — Prophet Muhammad (Peace Be Upon Him)
              </footer>
            </blockquote>
            <p className="text-white/70 text-sm flex items-center gap-2">
              Made with love & dua for the Ummah
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-amber-200 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-white/80">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
                { to: "/timings", label: "Prayer Times" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-amber-200 mb-6">Visit Us</h4>
            <div className="space-y-4 text-white/80">
              <p className="flex items-start gap-3">
                <span>
                  New Jersey, USA
                  <br />
                  <span className="text-sm text-amber-300">
                    Masjid Location Coming Soon In Sha Allah
                  </span>
                </span>
              </p>
              <p className="flex items-center gap-3">
                <a
                  href="tel:+19086555529"
                  className="hover:text-amber-300 transition-colors"
                >
                  +1 (908) 655-5529
                </a>
              </p>
              <p className="flex items-center gap-3">
                <a
                  href="mailto:info@zubayrcenter.org"
                  className="hover:text-amber-300 transition-colors"
                >
                  info@zubayrcenter.org
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span>Jumu'ah: 1:00 PM – 2:00 PM</span>
              </p>
            </div>
          </div>

          {/* Social & Donate */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-amber-200 mb-6">
                Support Our Work
              </h4>
              <p className="text-white/80 text-sm mb-4">
                Help us continue spreading beneficial knowledge and serving the
                community.
              </p>
              <a
                href="https://wa.me/19086555529?text=As-salamu%20alaikum!%20I'd%20like%20to%20make%20a%20donation%20to%20Zubayr%20Learning%20Center%20%E2%9D%A4%EF%B8%8F"
                target="_blank"
                rel="noopener noreferrer"
               
              >
              <Button text="Contact us for Donation" />
              </a>
            </div>

         
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>
            © 2025 Zubayr Learning Center • New Jersey, USA • All rights
            reserved
          </p>
          <p className="mt-2 text-amber-300/70">
            "And whoever saves one life — it is as if he had saved mankind
            entirely." (Quran 5:32)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 