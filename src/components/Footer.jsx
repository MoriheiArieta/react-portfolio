/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
 */

// import { ButtonPrimary } from "./Button";
import { useLenis } from "lenis/react";

/**
 * Node modules
 */
const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ciaralou/",
  },
];

const Footer = () => {
  const lenis = useLenis();

  const handleSmoothScroll = (event, href) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(href, {
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      }
    }
  };

  // Email template for mailto link
  //   const email = "arietamorihei@gmail.com";
  //   const subject = "Project Inquiry from Ciaralou's Website";
  //   const body = `Hi Ciaralou,\n\nI'm interested in working with you on a project. Here are some details:\n- Project Type: [e.g., Web Development, Design]\n- Timeline: [e.g., 2-3 months]\n- Budget: [e.g., $5000]\n\nPlease let me know your availability and next steps!\n\nBest regards,\n[Your Name]`;
  //   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            {/* <a href={mailtoLink}>
              <ButtonPrimary label="Start Project!" icon="chevron_right" />
            </a> */}
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul className="">
                {sitemap.map(({ label, href }, key) => (
                  <li className="" key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      onClick={(e) => handleSmoothScroll(e, href)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2">Socials</p>
              <ul className="">
                {socials.map(({ label, href }, key) => (
                  <li className="" key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="logo">
            <img
              src="/favicon.svg"
              width={40}
              height={40}
              alt="Ciaralou Palicpic"
              className="rounded-xl"
            />
          </a>

          <p className="text-zinc-500 text-sm">
            © 2025 <span className="text-zinc-200">ciarapalicpic</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
