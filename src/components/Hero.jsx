/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button.jsx";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/portraits/portrait_12_square.jpg"
                width={40}
                height={40}
                alt="Ciralou Palicpic Portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-baseline gap-2 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Let us elevate your success.
            </div>
          </div>

          <h2 className="headline-1 max-w-[20ch] sm:max-w-[25ch] lg:max-w-[20ch] mt-5 mb-8 lg:mb-10">
            Turning Data into Compelling Visual Stories for Smarter
            Decision-Making.
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="See CV"
              icon="visibility"
              href="https://drive.google.com/file/d/1eM8BHBVFOz9P80tZdktD_KVK643qmK-2/view"
              target="_blank"
            />
            <ButtonOutline
              href="#work"
              label="See Portfolio"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-[#b8798c] via-25% via-[#b8798c]/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/portraits/portrait_0_no_bg.png"
              width={656}
              height={800}
              alt="Ciaralou Palicpic"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
