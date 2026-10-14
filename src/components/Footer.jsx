import { useState } from "react";
import logo from "../assets/images/Logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed email:", email);
    setEmail("");
  };

  const linkClass =
    "group relative w-fit transition-all duration-300 hover:-translate-y-0.5 hover:text-fuchsia-500";

  return (
    <footer
      className="
        group/footer
        relative
        overflow-hidden
        bg-slate-100
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-fuchsia-300/10
          blur-3xl
          transition-all
          duration-1000
          group-hover/footer:bg-fuchsia-300/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-purple-300/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Main Footer */}
        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2
            sm:gap-12

            lg:grid-cols-[2fr_1fr_1fr_1fr]
            lg:gap-12
          "
        >
          {/* ================= BRAND ================= */}
          <div className="group sm:col-span-2 lg:col-span-1">
            <div className="w-fit">
              <img
                src={logo}
                alt="Furniture Store Logo"
                className="
                  h-9
                  w-auto
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:scale-105
                  sm:h-10
                "
              />

              <div
                className="
                  mt-2
                  h-[2px]
                  w-0
                  bg-fuchsia-500
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-gray-500
                transition-colors
                duration-300
                group-hover:text-gray-600
              "
            >
              Join our newsletter to stay up to date on features and releases.
            </p>

            {/* Newsletter */}
            <form
              onSubmit={handleSubscribe}
              className="
                mt-6
                flex
                max-w-lg
                flex-col
                gap-3

                sm:mt-7
                sm:flex-row
              "
            >
              <div className="group/input relative min-w-0 flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    h-12
                    w-full
                    rounded-md
                    border
                    border-gray-300
                    bg-white
                    px-4
                    text-sm
                    text-gray-700
                    outline-none

                    transition-all
                    duration-300

                    placeholder:text-gray-400

                    focus:border-fuchsia-500
                    focus:ring-4
                    focus:ring-fuchsia-500/10
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-fuchsia-500
                    transition-all
                    duration-500
                    group-focus-within/input:w-full
                  "
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="
                  group/button
                  relative
                  h-12
                  overflow-hidden
                  rounded-full
                  border
                  border-gray-400
                  px-7

                  text-sm
                  font-medium
                  text-gray-600

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                  hover:shadow-xl
                  hover:shadow-black/10

                  active:translate-y-0
                "
              >
                <span className="relative z-10">Subscribe</span>

                {/* Shine */}
                <span
                  className="
                    absolute
                    -left-10
                    top-0
                    h-full
                    w-8
                    rotate-12
                    bg-white/30
                    blur-sm

                    transition-all
                    duration-700

                    group-hover/button:left-[120%]
                  "
                />
              </button>
            </form>

            <p className="mt-3 max-w-lg text-[11px] leading-5 text-gray-500">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>

          {/* ================= ABOUT US ================= */}
          <div>
            <h3 className="group/title flex w-fit items-center gap-2 font-semibold text-black">
              About Us
              <span className="h-[2px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover/title:w-5" />
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#faq" className={linkClass}>
                FAQ
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>

              <a href="#contact" className={linkClass}>
                Contact
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>

              <a href="#returns" className={linkClass}>
                Returns
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>

              <a href="#blog" className={linkClass}>
                Blog
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>

              <a href="#shipping" className={linkClass}>
                Shipping
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* ================= CUSTOMER SUPPORT ================= */}
          <div>
            <h3 className="group/title flex w-fit items-center gap-2 font-semibold text-black">
              Customer Support
              <span className="h-[2px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover/title:w-5" />
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#affiliates" className={linkClass}>
                Affiliates
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>

              <a href="#payments" className={linkClass}>
                Apple Pay Payments
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>

              <a href="#returns" className={linkClass}>
                Returns
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>

              <a href="#returns-policy" className={linkClass}>
                Returns Policy
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>

              <a href="#support" className={linkClass}>
                Support
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
            <h3 className="group/title flex w-fit items-center gap-2 font-semibold text-black">
              Follow Us
              <span className="h-[2px] w-0 bg-fuchsia-500 transition-all duration-300 group-hover/title:w-5" />
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500">
              {/* Facebook */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/share/14sbfet5KEe/"
                className="
                  group/facebook
                  flex
                  w-fit
                  items-center
                  gap-3

                  transition-all
                  duration-300

                  hover:translate-x-2
                  hover:text-[#1877F2]
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-300

                    transition-all
                    duration-300

                    group-hover/facebook:rotate-6
                    group-hover/facebook:border-[#1877F2]
                    group-hover/facebook:bg-[#1877F2]
                    group-hover/facebook:text-white
                    group-hover/facebook:shadow-lg
                    group-hover/facebook:shadow-[#1877F2]/30
                  "
                >
                  <FaFacebookF className="text-sm" />
                </span>
                Facebook
              </a>

              {/* Instagram */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/fn_3d?stkn=MXQ1bTN1dzN4OGpocw=="
                className="
                  group/instagram
                  flex
                  w-fit
                  items-center
                  gap-3

                  transition-all
                  duration-300

                  hover:translate-x-2
                  hover:text-[#E1306C]
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-300

                    transition-all
                    duration-300

                    group-hover/instagram:-rotate-6
                    group-hover/instagram:border-transparent
                    group-hover/instagram:bg-gradient-to-tr
                    group-hover/instagram:from-[#F58529]
                    group-hover/instagram:via-[#E1306C]
                    group-hover/instagram:to-[#833AB4]
                    group-hover/instagram:text-white
                    group-hover/instagram:shadow-lg
                    group-hover/instagram:shadow-[#E1306C]/30
                  "
                >
                  <FaInstagram className="text-base" />
                </span>
                Instagram
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="
                  group/twitter
                  flex
                  w-fit
                  items-center
                  gap-3

                  transition-all
                  duration-300

                  hover:translate-x-2
                  hover:text-black
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-300

                    transition-all
                    duration-300

                    group-hover/twitter:rotate-6
                    group-hover/twitter:border-black
                    group-hover/twitter:bg-black
                    group-hover/twitter:text-white
                    group-hover/twitter:shadow-lg
                    group-hover/twitter:shadow-black/20
                  "
                >
                  <FaXTwitter className="text-sm" />
                </span>
                Twitter
              </a>

              {/* LinkedIn */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mussab-aletek-b30003255"
                className="
                  group/linkedin
                  flex
                  w-fit
                  items-center
                  gap-3

                  transition-all
                  duration-300

                  hover:translate-x-2
                  hover:text-[#0A66C2]
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-300

                    transition-all
                    duration-300

                    group-hover/linkedin:-rotate-6
                    group-hover/linkedin:border-[#0A66C2]
                    group-hover/linkedin:bg-[#0A66C2]
                    group-hover/linkedin:text-white
                    group-hover/linkedin:shadow-lg
                    group-hover/linkedin:shadow-[#0A66C2]/30
                  "
                >
                  <FaLinkedinIn className="text-sm" />
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-gray-300/70
            pt-6
            text-xs
            text-gray-500

            sm:mt-12
            sm:pt-7

            md:flex-row
            md:items-center
            md:justify-between

            lg:mt-14
          "
        >
          <p className="transition-colors duration-300 hover:text-gray-800">
            © 2026 Mosaab AlEtek Front End Developer. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-x-6
              gap-y-3
              sm:gap-x-8
            "
          >
            <a
              href="#privacy"
              className="group/bottom relative transition-colors duration-300 hover:text-black"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover/bottom:w-full" />
            </a>

            <a
              href="#terms"
              className="group/bottom relative transition-colors duration-300 hover:text-black"
            >
              Terms of Service
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover/bottom:w-full" />
            </a>

            <a
              href="#cookies"
              className="group/bottom relative transition-colors duration-300 hover:text-black"
            >
              Cookies Settings
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover/bottom:w-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
