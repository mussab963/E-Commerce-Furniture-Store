import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingCart, Menu, X } from "lucide-react";

import Button from "./Button";
import useCart from "@/Store/use-cart";

function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isFurnitureOpen, setIsFurnitureOpen] = useState(false);
  const [isLivingOpen, setIsLivingOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const cart = useCart((state) => state.cart);

  const navRef = useRef(null);

  // كل عناصر الـ dropdown حالياً تفتح صفحة المنتجات
  const productsPage = "/category";

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsFurnitureOpen(false);
    setIsLivingOpen(false);
    setIsAboutOpen(false);
    setIsContactOpen(false);
    setIsMobileOpen(false);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent scrolling when mobile sidebar is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <nav ref={navRef} className="relative flex items-center">
      {/* ========================================= */}
      {/* =============== DESKTOP ================= */}
      {/* ========================================= */}

      <div className="hidden lg:flex lg:items-center lg:gap-7">
        {/* ========================================= */}
        {/* ================ SHOP NOW =============== */}
        {/* ========================================= */}

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsFurnitureOpen(false);
              setIsLivingOpen(false);
              setIsAboutOpen(false);
              setIsContactOpen(false);
            }}
            className={`
              relative
              flex
              items-center
              text-[16px]
              transition-colors
              duration-300

              ${
                isOpen
                  ? "text-fuchsia-600"
                  : "text-black hover:text-fuchsia-600"
              }
            `}
          >
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-0.5
                bg-fuchsia-600
                transition-all
                duration-300

                ${isOpen ? "w-full" : "w-0"}
              `}
            />
            Shop Now
            <ChevronDown
              size={16}
              className={`
                ml-2
                transition-transform
                duration-200

                ${isOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          <div
            className={`
              absolute
              left-0
              top-full
              z-10
              mt-3
              w-48
              origin-top
              rounded-xl
              border
              border-black/5
              bg-white/95
              shadow-xl
              backdrop-blur-md

              transition-all
              duration-300
              ease-out

              ${
                isOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }
            `}
          >
            <ul className="flex flex-col gap-2 p-4">
              {/* Home Furniture */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2
                    text-[16px]

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Home Furniture
                </Link>
              </li>

              {/* Living Room */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Living Room
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================= */}
        {/* ============ HOME FURNITURE ============= */}
        {/* ========================================= */}

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsFurnitureOpen(!isFurnitureOpen);
              setIsOpen(false);
              setIsLivingOpen(false);
              setIsAboutOpen(false);
              setIsContactOpen(false);
            }}
            className={`
              relative
              flex
              items-center
              text-[16px]
              transition-colors
              duration-300

              ${
                isFurnitureOpen
                  ? "text-fuchsia-600"
                  : "text-black hover:text-fuchsia-600"
              }
            `}
          >
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-0.5
                bg-fuchsia-600
                transition-all
                duration-300

                ${isFurnitureOpen ? "w-full" : "w-0"}
              `}
            />
            Home Furniture
            <ChevronDown
              size={16}
              className={`
                ml-2
                transition-transform
                duration-200

                ${isFurnitureOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          <div
            className={`
              absolute
              left-0
              top-full
              z-10
              mt-3
              w-48
              origin-top
              rounded-xl
              border
              border-black/5
              bg-white/95
              shadow-xl
              backdrop-blur-md

              transition-all
              duration-300
              ease-out

              ${
                isFurnitureOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }
            `}
          >
            <ul className="flex flex-col gap-2 p-4">
              {/* Chairs */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Chairs
                </Link>
              </li>

              {/* Tables */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Tables
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================= */}
        {/* ============== LIVING ROOM ============== */}
        {/* ========================================= */}

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsLivingOpen(!isLivingOpen);
              setIsOpen(false);
              setIsFurnitureOpen(false);
              setIsAboutOpen(false);
              setIsContactOpen(false);
            }}
            className={`
              relative
              flex
              items-center
              text-[16px]
              transition-colors
              duration-300

              ${
                isLivingOpen
                  ? "text-fuchsia-600"
                  : "text-black hover:text-fuchsia-600"
              }
            `}
          >
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-0.5
                bg-fuchsia-600
                transition-all
                duration-300

                ${isLivingOpen ? "w-full" : "w-0"}
              `}
            />
            Living Room
            <ChevronDown
              size={16}
              className={`
                ml-2
                transition-transform
                duration-200

                ${isLivingOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          <div
            className={`
              absolute
              left-0
              top-full
              z-10
              mt-3
              w-48
              origin-top
              rounded-xl
              border
              border-black/5
              bg-white/95
              shadow-xl
              backdrop-blur-md

              transition-all
              duration-300
              ease-out

              ${
                isLivingOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }
            `}
          >
            <ul className="flex flex-col gap-2 p-4">
              {/* Sofas */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Sofas
                </Link>
              </li>

              {/* Couches */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Couches
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================= */}
        {/* ================ ABOUT US =============== */}
        {/* ========================================= */}

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsAboutOpen(!isAboutOpen);
              setIsOpen(false);
              setIsFurnitureOpen(false);
              setIsLivingOpen(false);
              setIsContactOpen(false);
            }}
            className={`
              relative
              flex
              items-center
              text-[16px]
              transition-colors
              duration-300

              ${
                isAboutOpen
                  ? "text-fuchsia-600"
                  : "text-black hover:text-fuchsia-600"
              }
            `}
          >
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-0.5
                bg-fuchsia-600
                transition-all
                duration-300

                ${isAboutOpen ? "w-full" : "w-0"}
              `}
            />
            About Us
            <ChevronDown
              size={16}
              className={`
                ml-2
                transition-transform
                duration-200

                ${isAboutOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          <div
            className={`
              absolute
              left-0
              top-full
              z-10
              mt-3
              w-48
              origin-top
              rounded-xl
              border
              border-black/5
              bg-white/95
              shadow-xl
              backdrop-blur-md

              transition-all
              duration-300
              ease-out

              ${
                isAboutOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }
            `}
          >
            <ul className="flex flex-col gap-2 p-4">
              {/* Our Story */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Our Story
                </Link>
              </li>

              {/* Our Team */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================= */}
        {/* ============== CONTACT US =============== */}
        {/* ========================================= */}

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsContactOpen(!isContactOpen);
              setIsOpen(false);
              setIsFurnitureOpen(false);
              setIsLivingOpen(false);
              setIsAboutOpen(false);
            }}
            className={`
              relative
              flex
              items-center
              text-[16px]
              transition-colors
              duration-300

              ${
                isContactOpen
                  ? "text-fuchsia-600"
                  : "text-black hover:text-fuchsia-600"
              }
            `}
          >
            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-0.5
                bg-fuchsia-600
                transition-all
                duration-300

                ${isContactOpen ? "w-full" : "w-0"}
              `}
            />
            Contact Us
            <ChevronDown
              size={16}
              className={`
                ml-2
                transition-transform
                duration-200

                ${isContactOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          <div
            className={`
              absolute
              left-0
              top-full
              z-10
              mt-3
              w-48
              origin-top
              rounded-xl
              border
              border-black/5
              bg-white/95
              shadow-xl
              backdrop-blur-md

              transition-all
              duration-300
              ease-out

              ${
                isContactOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }
            `}
          >
            <ul className="flex flex-col gap-2 p-4">
              {/* Contact */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Contact Us
                </Link>
              </li>

              {/* Support */}
              <li>
                <Link
                  to={productsPage}
                  onClick={closeAllMenus}
                  className="
                    group
                    relative
                    block
                    rounded-lg
                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-5
                      w-0.75
                      -translate-y-1/2
                      scale-y-0
                      rounded-full
                      bg-fuchsia-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100
                    "
                  />
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================= */}
        {/* =========== CART + BUTTONS ============== */}
        {/* ========================================= */}

        <div className="flex items-center gap-2 pl-4">
          {/* Cart */}
          <div className="relative flex items-center">
            <ShoppingCart size={22} />

            <span
              className="
                absolute
                -right-2
                -top-2
                flex
                h-4
                min-w-4
                items-center
                justify-center
                rounded-full
                bg-red-500
                px-1
                text-[10px]
                text-white
              "
            >
              {cart.length}
            </span>
          </div>

          {/* Login */}
          <Button variant="primary" color="primary" className="group">
            <span
              className="
                pointer-events-none
                absolute
                -left-[120%]
                top-0
                h-full
                w-[70%]
                skew-x-[-25deg]

                bg-gradient-to-r
                from-transparent
                via-white/50
                to-transparent

                transition-all
                duration-700
                ease-out

                group-hover:left-[140%]
              "
            />

            <span className="relative z-10">Login</span>
          </Button>

          {/* Get Started */}
          <Button variant="outline" color="primary" className="group">
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                origin-left
                scale-x-0
                bg-[#C900C1]

                transition-transform
                duration-300
                ease-out

                group-hover:scale-x-100
              "
            />

            <span
              className="
                relative
                z-10

                transition-colors
                duration-300

                group-hover:text-white
              "
            >
              Get Started
            </span>
          </Button>
        </div>
      </div>

      {/* ========================================= */}
      {/* ============= MOBILE BUTTON ============= */}
      {/* ========================================= */}

      <button
        type="button"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        className={`
          relative
          z-[80]

          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-xl
          border
          border-black/5
          bg-white/70

          shadow-sm
          backdrop-blur-md

          transition-all
          duration-500
          ease-out

          hover:bg-white
          hover:shadow-md

          active:scale-95

          lg:hidden

          ${isMobileOpen ? "rotate-90 bg-white shadow-lg" : "rotate-0"}
        `}
        aria-label="Toggle Navigation Menu"
        aria-expanded={isMobileOpen}
      >
        <span
          className={`
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isMobileOpen
                ? "rotate-90 scale-110 text-[#C900C1]"
                : "rotate-0 scale-100 text-black"
            }
          `}
        >
          {isMobileOpen ? <X size={25} /> : <Menu size={25} />}
        </span>
      </button>

      {/* ========================================= */}
      {/* ================ OVERLAY ================ */}
      {/* ========================================= */}

      <div
        onClick={closeAllMenus}
        className={`
          fixed
          inset-0
          z-[60]

          bg-black/25
          backdrop-blur-[4px]

          transition-all
          duration-500
          ease-out

          lg:hidden

          ${isMobileOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* ========================================= */}
      {/* ============ MOBILE SIDEBAR ============= */}
      {/* ========================================= */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[70]

          h-dvh
          w-[88vw]
          max-w-[250px]

          overflow-hidden

          border-l
          border-white/60

          bg-white/90
          p-6

          shadow-[-20px_0_60px_rgba(0,0,0,0.16)]
          backdrop-blur-2xl

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          lg:hidden

          ${
            isMobileOpen
              ? `
                visible
                translate-x-0
                rotate-0
                scale-100
                opacity-100
              `
              : `
                invisible
                translate-x-[110%]
                rotate-[2deg]
                scale-[0.96]
                opacity-0
              `
          }
        `}
      >
        {/* Top Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20

            h-56
            w-56

            rounded-full
            bg-fuchsia-400/20
            blur-3xl
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-20

            h-60
            w-60

            rounded-full
            bg-purple-400/15
            blur-3xl
          "
        />

        {/* Opening Shine */}
        <div
          className={`
            pointer-events-none
            absolute
            top-0

            h-full
            w-[45%]

            -skew-x-12

            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent

            transition-all
            duration-[1200ms]
            ease-out

            ${isMobileOpen ? "left-[140%]" : "-left-[120%]"}
          `}
        />

        <div className="relative z-10 flex h-full flex-col">
          {/* Sidebar Header */}
          <div
            className={`
              mb-8
              flex
              items-center
              justify-between
              pr-12

              transition-all
              duration-500
              delay-100

              ${
                isMobileOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              }
            `}
          >
            <div>
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                "
              >
                Navigation
              </p>

              <h3 className="mt-1 text-xl font-bold text-black">Explore</h3>
            </div>
          </div>

          {/* ========================================= */}
          {/* ============= MOBILE LINKS ============== */}
          {/* ========================================= */}

          <ul className="flex flex-col gap-2">
            {/* Home Furniture */}
            <li
              className={`
                transition-all
                duration-500
                delay-[120ms]

                ${
                  isMobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
            >
              <Link
                to={productsPage}
                onClick={closeAllMenus}
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-xl
                  px-4
                  py-3

                  font-medium
                  text-gray-700

                  transition-all
                  duration-300

                  hover:translate-x-1
                  hover:bg-fuchsia-50
                  hover:text-[#C900C1]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-1/2

                    h-6
                    w-1

                    -translate-y-1/2
                    scale-y-0

                    rounded-r-full
                    bg-[#C900C1]

                    transition-transform
                    duration-300

                    group-hover:scale-y-100
                  "
                />
                Home Furniture
              </Link>
            </li>

            {/* Living Room */}
            <li
              className={`
                transition-all
                duration-500
                delay-[180ms]

                ${
                  isMobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
            >
              <Link
                to={productsPage}
                onClick={closeAllMenus}
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-xl
                  px-4
                  py-3

                  font-medium
                  text-gray-700

                  transition-all
                  duration-300

                  hover:translate-x-1
                  hover:bg-fuchsia-50
                  hover:text-[#C900C1]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-1/2

                    h-6
                    w-1

                    -translate-y-1/2
                    scale-y-0

                    rounded-r-full
                    bg-[#C900C1]

                    transition-transform
                    duration-300

                    group-hover:scale-y-100
                  "
                />
                Living Room
              </Link>
            </li>

            {/* About Us */}
            <li
              className={`
                transition-all
                duration-500
                delay-[240ms]

                ${
                  isMobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
            >
              <Link
                to={productsPage}
                onClick={closeAllMenus}
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-xl
                  px-4
                  py-3

                  font-medium
                  text-gray-700

                  transition-all
                  duration-300

                  hover:translate-x-1
                  hover:bg-fuchsia-50
                  hover:text-[#C900C1]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-1/2

                    h-6
                    w-1

                    -translate-y-1/2
                    scale-y-0

                    rounded-r-full
                    bg-[#C900C1]

                    transition-transform
                    duration-300

                    group-hover:scale-y-100
                  "
                />
                About Us
              </Link>
            </li>

            {/* Contact */}
            <li
              className={`
                transition-all
                duration-500
                delay-[300ms]

                ${
                  isMobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
            >
              <Link
                to={productsPage}
                onClick={closeAllMenus}
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-xl
                  px-4
                  py-3

                  font-medium
                  text-gray-700

                  transition-all
                  duration-300

                  hover:translate-x-1
                  hover:bg-fuchsia-50
                  hover:text-[#C900C1]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-1/2

                    h-6
                    w-1

                    -translate-y-1/2
                    scale-y-0

                    rounded-r-full
                    bg-[#C900C1]

                    transition-transform
                    duration-300

                    group-hover:scale-y-100
                  "
                />
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Animated Divider */}
          <div
            className={`
              my-5
              h-px
              origin-left

              bg-gradient-to-r
              from-transparent
              via-gray-300
              to-transparent

              transition-all
              duration-700
              delay-300

              ${
                isMobileOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }
            `}
          />

          {/* Cart */}
          <div
            className={`
              flex
              items-center
              justify-between

              rounded-xl
              px-4
              py-3

              transition-all
              duration-500
              delay-[340ms]

              hover:bg-gray-50

              ${
                isMobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            <span className="font-medium">Cart</span>

            <div className="relative">
              <ShoppingCart size={22} />

              <span
                className="
                  absolute
                  -right-2
                  -top-2

                  flex
                  h-4
                  min-w-4
                  items-center
                  justify-center

                  rounded-full
                  bg-red-500
                  px-1

                  text-[10px]
                  text-white
                "
              >
                {cart.length}
              </span>
            </div>
          </div>

          {/* ========================================= */}
          {/* ============ MOBILE BUTTONS ============= */}
          {/* ========================================= */}

          <div
            className={`
              mt-auto
              flex
              flex-col
              gap-3

              transition-all
              duration-500
              delay-[380ms]

              ${
                isMobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            {/* Login */}
            <Button
              variant="primary"
              color="primary"
              className="
                group
                relative
                w-full
                overflow-hidden

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-[0_12px_30px_rgba(201,0,193,0.30)]

                active:scale-[0.97]
              "
            >
              <span
                className="
                  pointer-events-none
                  absolute
                  -left-[150%]
                  top-0

                  h-full
                  w-[80%]

                  skew-x-[-25deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/50
                  to-transparent

                  transition-all
                  duration-700
                  ease-out

                  group-hover:left-[150%]
                "
              />

              <span className="relative z-10">Login</span>
            </Button>

            {/* Get Started */}
            <Button
              variant="outline"
              color="primary"
              className="
                group
                relative
                w-full
                overflow-hidden

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:scale-[1.02]

                active:scale-[0.97]
              "
            >
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  origin-left
                  scale-x-0

                  bg-[#C900C1]

                  transition-transform
                  duration-300
                  ease-out

                  group-hover:scale-x-100
                "
              />

              <span
                className="
                  relative
                  z-10

                  transition-colors
                  duration-300

                  group-hover:text-white
                "
              >
                Get Started
              </span>
            </Button>
          </div>
        </div>
      </aside>
    </nav>
  );
}

export default NavBar;
