import { useState, useEffect } from "react";
import ProductCard from "../components/Card";
import api from "../Api/axios";

import P1 from "../assets/images/P1.png";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.png";
import P4 from "../assets/images/P4.png";
import P5 from "../assets/images/P5.png";
import P6 from "../assets/images/P6.png";
import P7 from "../assets/images/P7.png";
import P8 from "../assets/images/P8.png";

const products = [
  {
    id: 1,
    title: "Stylish Soft Chair",
    price: 20,
    category: "Bedroom",
    image: P1,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 2,
    title: "Modern Soft Chair",
    price: 40,
    category: "Living Room",
    image: P2,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 3,
    title: "Comfortable Soft Chair",
    price: 40,
    category: "Bedroom",
    image: P3,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 4,
    title: "New Soft Chair",
    price: 20,
    category: "Living Room",
    image: P4,
    colors: ["#8eea8a", "#a8d8f0", "#c9b8ff", "#f1a6d4"],
  },
  {
    id: 5,
    title: "New Light Soft Chair",
    price: 80,
    category: "Living Room",
    image: P5,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 6,
    title: "Modern Soft Chair",
    price: 32,
    category: "Home Office",
    image: P6,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
  {
    id: 7,
    title: "Old Modern Soft Chair",
    price: 70,
    category: "Living Room",
    image: P7,
    colors: ["#8ee0ba", "#a8d8f0", "#d6b8f0", "#f1a6d4"],
  },
  {
    id: 8,
    title: "Stylish Soft Chair",
    price: 20,
    category: "Bedroom",
    image: P8,
    colors: ["#f3c7a6", "#a8d8f0", "#c9b8ff", "#9c8ee5"],
  },
];

function Cards() {
  const [activeCategory, setActiveCategory] = useState("All Furniture");

  const [apiCategories, setApiCategories] = useState([]);

  const filteredProducts =
    activeCategory === "All Furniture"
      ? products
      : products.filter((product) => product.category === activeCategory);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get("/categories");

        console.log("Categories response:", response.data);

        setApiCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <section
      className="
        bg-gradient-to-br
        from-slate-100
        via-indigo-50
        to-fuchsia-100
        py-12
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Title */}
        <div className="max-w-3xl">
          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-black
              sm:text-4xl
              lg:text-5xl
            "
          >
            Stylish Collection of Furniture
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-gray-500
              sm:text-base
              sm:leading-7
              lg:mt-5
              lg:text-lg
              lg:leading-8
            "
          >
            Stay updated with our information and engaging blog posts about
            modern Furniture and Fashion on the industry
          </p>
        </div>

        {/* Categories */}
        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-2
            sm:mt-10
            sm:gap-3
            lg:mt-12
          "
        >
          {/* All Furniture */}
          <button
            type="button"
            onClick={() => setActiveCategory("All Furniture")}
            className={`
              relative
              overflow-hidden
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-medium

              transition-all
              duration-300
              ease-out

              sm:px-5
              sm:py-2.5
              sm:text-base

              ${
                activeCategory === "All Furniture"
                  ? `
                    border-black
                    bg-black
                    text-white
                    shadow-md
                  `
                  : `
                    border-black/5
                    bg-white/70
                    text-gray-700
                    shadow-sm

                    hover:-translate-y-0.5
                    hover:border-[#C900C1]/30
                    hover:bg-white
                    hover:text-[#C900C1]
                    hover:shadow-md
                  `
              }
            `}
          >
            All Furniture
          </button>

          {/* API Categories */}
          {apiCategories.map((category) => {
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={`
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                  font-medium

                  transition-all
                  duration-300
                  ease-out

                  sm:px-5
                  sm:py-2.5
                  sm:text-base

                  ${
                    isActive
                      ? `
                        border-black
                        bg-black
                        text-white
                        shadow-md
                      `
                      : `
                        border-black/5
                        bg-white/70
                        text-gray-700
                        shadow-sm

                        hover:-translate-y-0.5
                        hover:border-[#C900C1]/30
                        hover:bg-white
                        hover:text-[#C900C1]
                        hover:shadow-md
                      `
                  }
                `}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-6

              sm:mt-12
              sm:grid-cols-2
              sm:gap-7

              lg:mt-16
              lg:grid-cols-3
              lg:gap-8

              xl:grid-cols-4
            "
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            className="
              mt-12
              rounded-2xl
              border
              border-black/5
              bg-white/60
              px-6
              py-12
              text-center
              backdrop-blur-sm
            "
          >
            <p className="text-lg font-medium text-gray-600">
              No products available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cards;
