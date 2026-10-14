import { useEffect, useState } from "react";

import {
  LayoutGrid,
  List,
  SlidersHorizontal,
  ChevronDown,
  X,
} from "lucide-react";

import api from "../Api/axios";

const filterColors = [
  "#8ee0ba",

  "#f3c7a6",

  "#f3a6c7",

  "#c9b8ff",

  "#a8d8f0",

  "#9c8ee5",

  "#d4d4d4",

  "#ffffff",
];

const discounts = ["10% and above", "20% and above", "30% and above"];

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  const [activeCategory, setActiveCategory] = useState("All Furniture");

  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const [view, setView] = useState("grid");

  const [loading, setLoading] = useState(true);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [price, setPrice] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  // Filter collapse

  const [filterSections, setFilterSections] = useState({
    category: true,

    color: true,

    price: true,

    discount: true,
  });

  const toggleFilterSection = (section) => {
    setFilterSections((prev) => ({
      ...prev,

      [section]: !prev[section],
    }));
  };

  // =========================================

  // GET CATEGORIES

  // =========================================

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get("/categories");

        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  // =========================================

  // GET PRODUCTS

  // =========================================

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);

        const url = activeCategoryId
          ? `/products?categoryId=${activeCategoryId}`
          : "/products";

        const response = await api.get(url);

        console.log("Products response:", response.data);

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [activeCategoryId]);

  // =========================================

  // PREVENT BODY SCROLL WHEN FILTER OPEN

  // =========================================

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  // =========================================

  // ALL FURNITURE

  // =========================================

  const handleAllFurniture = () => {
    setActiveCategory("All Furniture");

    setActiveCategoryId(null);
  };

  // =========================================

  // CATEGORY

  // =========================================

  const handleCategory = (category) => {
    setActiveCategory(category.name);

    setActiveCategoryId(category.id);
  };

  return (
    <main
      className="

        min-h-screen

        bg-gradient-to-br

        from-slate-50

        via-indigo-50

        to-fuchsia-50

      "
    >
      <section
        className="

          mx-auto

          max-w-7xl

          px-4

          py-10



          sm:px-6

          sm:py-12



          lg:px-8

          lg:py-14

        "
      >
        {/* ========================================= */}

        {/* =============== TOP AREA ================ */}

        {/* ========================================= */}

        <div className="flex flex-col gap-6">
          {/* Title + View */}

          <div
            className="

              flex

              flex-col

              gap-5



              sm:flex-row

              sm:items-end

              sm:justify-between

            "
          >
            {/* Title */}

            <div>
              <h1
                className="

                  text-3xl

                  font-bold

                  tracking-tight

                  text-black



                  sm:text-4xl

                  lg:text-5xl

                "
              >
                Furniture Collection
              </h1>

              {/* Breadcrumb */}

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                <span>Home</span>

                <span>/</span>

                <span>List of Products</span>
              </div>
            </div>

            {/* View */}

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-black">View</span>

              {/* Grid */}

              <button
                type="button"
                onClick={() => setView("grid")}
                className={`

                  flex

                  h-9

                  w-9

                  items-center

                  justify-center

                  rounded-lg



                  transition-all

                  duration-300



                  ${
                    view === "grid"
                      ? `

                        bg-black

                        text-white

                        shadow-md

                      `
                      : `

                        bg-white

                        text-gray-500



                        hover:-translate-y-0.5

                        hover:text-[#C900C1]

                        hover:shadow-md

                      `
                  }

                `}
              >
                <LayoutGrid size={16} />
              </button>

              {/* List */}

              <button
                type="button"
                onClick={() => setView("list")}
                className={`

                  flex

                  h-9

                  w-9

                  items-center

                  justify-center

                  rounded-lg



                  transition-all

                  duration-300



                  ${
                    view === "list"
                      ? `

                        bg-black

                        text-white

                        shadow-md

                      `
                      : `

                        bg-white

                        text-gray-500



                        hover:-translate-y-0.5

                        hover:text-[#C900C1]

                        hover:shadow-md

                      `
                  }

                `}
              >
                <List size={17} />
              </button>
            </div>
          </div>

          {/* ========================================= */}

          {/* ============== CATEGORIES =============== */}

          {/* ========================================= */}

          <div
            className="

              flex

              gap-2

              overflow-x-auto

              pb-2



              sm:flex-wrap

              sm:overflow-visible

              sm:pb-0

            "
          >
            {/* All Furniture */}

            <button
              type="button"
              onClick={handleAllFurniture}
              className={`

                shrink-0

                rounded-full

                border

                px-4

                py-2



                text-xs

                font-medium



                transition-all

                duration-300



                sm:px-5

                sm:text-sm



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

                      bg-white/80

                      text-gray-600



                      hover:-translate-y-0.5

                      hover:border-[#C900C1]/30

                      hover:text-[#C900C1]

                      hover:shadow-md

                    `
                }

              `}
            >
              All Furniture
            </button>

            {/* API Categories */}

            {categories.map((category) => {
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategory(category)}
                  className={`

                    shrink-0

                    rounded-full

                    border

                    px-4

                    py-2



                    text-xs

                    font-medium



                    transition-all

                    duration-300



                    sm:px-5

                    sm:text-sm



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

                          bg-white/80

                          text-gray-600



                          hover:-translate-y-0.5

                          hover:border-[#C900C1]/30

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
        </div>

        {/* ========================================= */}

        {/* =========== MOBILE FILTER BUTTON ========= */}

        {/* ========================================= */}

        <div className="mt-8 flex justify-end lg:hidden">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="

              group

              flex

              items-center

              gap-2



              rounded-full

              border

              border-black/10

              bg-white



              px-5

              py-2.5



              text-sm

              font-medium

              text-black



              shadow-sm



              transition-all

              duration-300



              hover:-translate-y-0.5

              hover:border-[#C900C1]/30

              hover:text-[#C900C1]

              hover:shadow-md

            "
          >
            <SlidersHorizontal
              size={16}
              className="

                transition-transform

                duration-300

                group-hover:rotate-12

              "
            />
            Filter
          </button>
        </div>

        {/* ========================================= */}

        {/* ========= FILTERS + PRODUCTS ============ */}

        {/* ========================================= */}

        <div
          className="

            mt-10

            grid

            gap-8



            lg:mt-14

            lg:grid-cols-[210px_minmax(0,1fr)]



            xl:grid-cols-[230px_minmax(0,1fr)]

          "
        >
          {/* ========================================= */}

          {/* ============ DESKTOP FILTERS ============ */}

          {/* ========================================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <h3 className="text-base font-bold text-black">Short By</h3>

              {/* ========================================= */}

              {/* =============== CATEGORY ================ */}

              {/* ========================================= */}

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => toggleFilterSection("category")}
                  aria-expanded={filterSections.category}
                  className="

                    flex

                    w-full

                    items-center

                    justify-between

                  "
                >
                  <p className="text-sm font-semibold text-black">Category</p>

                  <ChevronDown
                    size={15}
                    className={`

                      transition-transform

                      duration-300



                      ${filterSections.category ? "rotate-180" : "rotate-0"}

                    `}
                  />
                </button>

                <div
                  className={`

                    grid

                    transition-all

                    duration-300

                    ease-out



                    ${
                      filterSections.category
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }

                  `}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col items-start gap-2.5">
                      <button
                        type="button"
                        onClick={handleAllFurniture}
                        className={`

                          text-left

                          text-sm



                          transition-all

                          duration-300



                          ${
                            activeCategory === "All Furniture"
                              ? "font-semibold text-[#C900C1]"
                              : "text-gray-500 hover:translate-x-1 hover:text-black"
                          }

                        `}
                      >
                        All Furniture
                      </button>

                      {categories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => handleCategory(category)}
                          className={`

                            text-left

                            text-sm



                            transition-all

                            duration-300



                            ${
                              activeCategory === category.name
                                ? "font-semibold text-[#C900C1]"
                                : "text-gray-500 hover:translate-x-1 hover:text-black"
                            }

                          `}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 h-px bg-black/5" />

              {/* ========================================= */}

              {/* ============= COLOR FAMILY ============== */}

              {/* ========================================= */}

              <div>
                <button
                  type="button"
                  onClick={() => toggleFilterSection("color")}
                  aria-expanded={filterSections.color}
                  className="

                    flex

                    w-full

                    items-center

                    justify-between

                  "
                >
                  <p className="text-sm font-semibold select-none text-black">
                    Color Family
                  </p>

                  <ChevronDown
                    size={15}
                    className={`

                      transition-transform

                      duration-300



                      ${filterSections.color ? "rotate-180" : "rotate-0"}

                    `}
                  />
                </button>

                <div
                  className={`

                    grid

                    transition-all

                    duration-300

                    ease-out



                    ${
                      filterSections.color
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }

                  `}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-2">
                      {filterColors.map((color, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`Color ${index + 1}`}
                          className="

                              h-5

                              w-5

                              rounded-full

                              border

                              border-black/10



                              transition-all

                              duration-300



                              hover:scale-125

                              hover:shadow-md

                            "
                          style={{
                            backgroundColor: color,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 h-px bg-black/5" />

              {/* ========================================= */}

              {/* ================= PRICE ================= */}

              {/* ========================================= */}

              <div>
                <button
                  type="button"
                  onClick={() => toggleFilterSection("price")}
                  aria-expanded={filterSections.price}
                  className="

                    flex

                    w-full

                    items-center

                    justify-between

                  "
                >
                  <p className="text-sm font-semibold text-black">Price</p>

                  <ChevronDown
                    size={15}
                    className={`

                      transition-transform

                      duration-300



                      ${filterSections.price ? "rotate-180" : "rotate-0"}

                    `}
                  />
                </button>

                <div
                  className={`

                    grid

                    transition-all

                    duration-300

                    ease-out



                    ${
                      filterSections.price
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }

                  `}
                >
                  <div className="overflow-hidden">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="

    w-full

    cursor-pointer

    accent-[#C900C1]

  "
                    />

                    <div className="mt-2 flex justify-between text-xs text-gray-400">
                      <span>${price}</span>

                      <span>$1000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 h-px bg-black/5" />

              {/* ========================================= */}

              {/* ============== DISCOUNT ================= */}

              {/* ========================================= */}

              <div>
                <button
                  type="button"
                  onClick={() => toggleFilterSection("discount")}
                  aria-expanded={filterSections.discount}
                  className="

                    flex

                    w-full

                    items-center

                    justify-between

                  "
                >
                  <p className="text-sm  font-semibold text-black user-select-none">
                    Discount Range
                  </p>

                  <ChevronDown
                    size={15}
                    className={`

                      transition-transform

                      duration-300



                      ${filterSections.discount ? "rotate-180" : "rotate-0"}

                    `}
                  />
                </button>

                <div
                  className={`

                    grid

                    transition-all

                    duration-300

                    ease-out



                    ${
                      filterSections.discount
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }

                  `}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-2">
                      {discounts.map((discount) => (
                        <label
                          key={discount}
                          className="

                            flex

                            cursor-pointer

                            items-center

                            select-none

                            gap-2



                            text-sm

                            text-gray-500



                            transition-colors

                            duration-300



                            hover:text-black

                          "
                        >
                          <input type="checkbox" className="accent-[#C900C1]" />

                          {discount}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* ========================================= */}

          {/* =============== PRODUCTS ================ */}

          {/* ========================================= */}

          <div className="min-w-0">
            {loading ? (
              /* Loading */

              <div className="flex min-h-[300px] items-center justify-center">
                <div
                  className="

                    h-10

                    w-10



                    animate-spin



                    rounded-full

                    border-4

                    border-gray-200

                    border-t-[#C900C1]

                  "
                />
              </div>
            ) : products.length > 0 ? (
              <div
                className={
                  view === "grid"
                    ? `

                      grid

                      grid-cols-1

                      gap-6



                      min-[520px]:grid-cols-2



                      lg:grid-cols-3

                      lg:gap-8

                    `
                    : `

                      grid

                      grid-cols-1

                      gap-5

                    `
                }
              >
                {products.map((product) => (
                  <article
                    key={product.id}
                    className={`

                      group

                      relative

                      overflow-hidden



                      rounded-3xl

                      border

                      border-black/5

                      bg-white/70



                      transition-all

                      duration-500

                      ease-out



                      hover:-translate-y-1

                      hover:border-fuchsia-300/40

                      hover:shadow-[0_20px_45px_rgba(201,0,193,0.12)]



                      ${
                        view === "list"
                          ? `

                            flex

                            flex-col

                            gap-4

                            p-3



                            sm:flex-row

                            sm:items-center

                          `
                          : "p-3"
                      }

                    `}
                  >
                    {/* Glow */}

                    <div
                      className="

                        pointer-events-none

                        absolute

                        -right-20

                        -top-20



                        h-40

                        w-40



                        rounded-full

                        bg-fuchsia-400/0

                        blur-3xl



                        transition-all

                        duration-500



                        group-hover:bg-fuchsia-400/10

                      "
                    />

                    {/* Image */}

                    <div
                      className={`

                        relative

                        shrink-0

                        overflow-hidden

                        rounded-2xl

                        bg-white



                        ${
                          view === "list"
                            ? `

                              w-full

                              sm:w-52

                              md:w-60

                            `
                            : "w-full"
                        }

                      `}
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className={`

                          w-full

                          object-cover



                          transition-transform

                          duration-700

                          ease-out



                          group-hover:scale-105



                          ${
                            view === "list"
                              ? `

                                h-48

                                sm:h-40

                              `
                              : `

                                h-48

                                sm:h-52

                              `
                          }

                        `}
                      />

                      {/* Shine */}

                      <span
                        className="

                          pointer-events-none

                          absolute

                          -left-[120%]

                          top-0



                          h-full

                          w-[55%]



                          -skew-x-12



                          bg-gradient-to-r

                          from-transparent

                          via-white/40

                          to-transparent



                          transition-all

                          duration-700

                          ease-out



                          group-hover:left-[130%]

                        "
                      />
                    </div>

                    {/* Product Info */}

                    <div
                      className={`

                        relative

                        z-10



                        ${view === "list" ? "flex-1 px-1 py-2" : "mt-4"}

                      `}
                    >
                      <p className="text-xs font-medium text-[#C900C1]">
                        {product.category?.name}
                      </p>

                      <h3
                        className="

                          mt-1

                          text-base

                          font-semibold

                          text-gray-700



                          transition-all

                          duration-300



                          group-hover:text-black

                        "
                      >
                        {product.name}
                      </h3>

                      {view === "list" && (
                        <p
                          className="

                            mt-2

                            max-w-xl



                            text-sm

                            leading-6

                            text-gray-500

                          "
                        >
                          {product.description}
                        </p>
                      )}

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <p
                          className="

                            text-lg

                            font-bold

                            text-black



                            transition-colors

                            duration-300



                            group-hover:text-[#C900C1]

                          "
                        >
                          ${product.price}
                        </p>

                        <button
                          type="button"
                          className="

                            rounded-full

                            bg-indigo-100

                            px-4

                            py-2



                            text-xs

                            font-medium

                            text-black



                            transition-all

                            duration-300

                            ease-out



                            hover:-translate-y-0.5

                            hover:bg-[#C900C1]

                            hover:text-white

                            hover:shadow-[0_8px_20px_rgba(201,0,193,0.25)]



                            active:scale-95

                          "
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Empty */

              <div
                className="

                  rounded-3xl

                  border

                  border-black/5

                  bg-white/60



                  px-6

                  py-16



                  text-center

                  backdrop-blur-sm

                "
              >
                <p className="text-lg font-semibold text-gray-700">
                  No products available
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  There are no products available in this category yet.
                </p>
              </div>
            )}

            {/* ========================================= */}

            {/* ============== PAGINATION =============== */}

            {/* ========================================= */}

            {products.length > 0 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                {/* Previous */}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="

        flex

        h-7

        w-7

        items-center

        justify-center

        rounded-md

        bg-gray-100

        text-sm

        text-gray-500

        transition-all

        duration-300

        hover:bg-gray-200

        hover:text-black

      "
                >
                  ‹
                </button>

                {/* Pages */}

                {[1, 2, 3, 4, 100].map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`

          flex

          h-7

          min-w-7

          items-center

          justify-center

          rounded-full

          px-2



          text-[11px]

          font-medium



          transition-all

          duration-300



          ${
            currentPage === page
              ? `

                bg-[#C900C1]

                text-white

                shadow-[0_4px_12px_rgba(201,0,193,0.25)]

              `
              : `

                bg-gray-100

                text-gray-400



                hover:bg-gray-200

                hover:text-black

              `
          }

        `}
                  >
                    {page < 10 ? `0${page}` : page}
                  </button>
                ))}

                {/* Next */}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, 100))
                  }
                  className="

        flex

        h-7

        w-7

        items-center

        justify-center

        rounded-md

        bg-gray-100

        text-sm

        text-gray-500

        transition-all

        duration-300

        hover:bg-gray-200

        hover:text-black

      "
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ========================================= */}
        {/* ============== SIMILAR ITEMS ============ */}
        {/* ========================================= */}

        {products.length > 0 && (
          <div className="mt-14 sm:mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Similar Items
            </h2>

            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-x-4
                gap-y-7

                sm:gap-x-5
                lg:grid-cols-4
              "
            >
              {products.slice(0, 4).map((product) => (
                <article
                  key={`similar-${product.id}`}
                  className="group min-w-0"
                >
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-xl
                      bg-white
                    "
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="
                        h-32
                        w-full
                        object-cover

                        transition-transform
                        duration-500
                        ease-out

                        group-hover:scale-105

                        sm:h-40
                        lg:h-36
                        xl:h-40
                      "
                    />

                    <span
                      className="
                        pointer-events-none
                        absolute
                        -left-[120%]
                        top-0
                        h-full
                        w-[55%]
                        -skew-x-12

                        bg-gradient-to-r
                        from-transparent
                        via-white/35
                        to-transparent

                        transition-all
                        duration-700

                        group-hover:left-[130%]
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-3
                      truncate
                      text-xs
                      font-medium
                      text-gray-500

                      transition-colors
                      duration-300

                      group-hover:text-black

                      sm:text-sm
                    "
                  >
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8ee0ba]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f3c7a6]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f3a6c7]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9b8ff]" />
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <p className="text-sm font-bold text-black sm:text-base">
                      ${product.price}
                    </p>

                    <button
                      type="button"
                      className="
                        shrink-0
                        rounded-full
                        bg-indigo-100
                        px-3
                        py-1.5

                        text-[10px]
                        font-medium
                        text-black

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-[#C900C1]
                        hover:text-white
                        hover:shadow-[0_6px_16px_rgba(201,0,193,0.25)]

                        active:scale-95

                        sm:text-xs
                      "
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ========================================= */}

      {/* =========== MOBILE FILTER DRAWER ========= */}

      {/* ========================================= */}

      {/* Overlay */}

      <div
        onClick={() => setIsFilterOpen(false)}
        className={`

          fixed

          inset-0

          z-[80]



          bg-black/25

          backdrop-blur-[3px]



          transition-all

          duration-500



          lg:hidden



          ${isFilterOpen ? "visible opacity-100" : "invisible opacity-0"}

        `}
      />

      {/* Drawer */}

      <aside
        className={`

          fixed

          right-0

          top-0

          z-[90]



          h-dvh

          w-[85vw]

          max-w-[330px]



          overflow-y-auto



          border-l

          border-white/50



          bg-white/95

          p-6



          shadow-[-20px_0_60px_rgba(0,0,0,0.16)]

          backdrop-blur-2xl



          transition-all

          duration-700

          ease-[cubic-bezier(0.22,1,0.36,1)]



          lg:hidden



          ${
            isFilterOpen
              ? `

                visible

                translate-x-0

                scale-100

                opacity-100

              `
              : `

                invisible

                translate-x-[110%]

                scale-[0.97]

                opacity-0

              `
          }

        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Products
            </p>

            <h3 className="mt-1 text-xl font-bold text-black">Filter</h3>
          </div>

          <button
            type="button"
            onClick={() => setIsFilterOpen(false)}
            className="

              flex

              h-10

              w-10

              items-center

              justify-center



              rounded-full

              bg-gray-100



              transition-all

              duration-300



              hover:rotate-90

              hover:bg-black

              hover:text-white

            "
          >
            <X size={18} />
          </button>
        </div>

        <div className="my-6 h-px bg-black/5" />

        {/* ========================================= */}

        {/* ========== MOBILE CATEGORY ============== */}

        {/* ========================================= */}

        <div>
          <button
            type="button"
            onClick={() => toggleFilterSection("category")}
            className="flex w-full items-center justify-between"
          >
            <p className="font-semibold text-black">Category</p>

            <ChevronDown
              size={16}
              className={`

                transition-transform

                duration-300



                ${filterSections.category ? "rotate-180" : "rotate-0"}

              `}
            />
          </button>

          <div
            className={`

              grid

              transition-all

              duration-300

              ease-out



              ${
                filterSections.category
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }

            `}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    handleAllFurniture();

                    setIsFilterOpen(false);
                  }}
                  className={`

                    text-left

                    text-sm



                    ${
                      activeCategory === "All Furniture"
                        ? "font-semibold text-[#C900C1]"
                        : "text-gray-500"
                    }

                  `}
                >
                  All Furniture
                </button>

                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      handleCategory(category);

                      setIsFilterOpen(false);
                    }}
                    className={`

                      text-left

                      text-sm



                      ${
                        activeCategory === category.name
                          ? "font-semibold text-[#C900C1]"
                          : "text-gray-500"
                      }

                    `}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 h-px bg-black/5" />

        {/* ========================================= */}

        {/* ============ MOBILE COLOR =============== */}

        {/* ========================================= */}

        <div>
          <button
            type="button"
            onClick={() => toggleFilterSection("color")}
            className="flex w-full items-center justify-between"
          >
            <p className="font-semibold text-black">Color Family</p>

            <ChevronDown
              size={16}
              className={`

                transition-transform

                duration-300



                ${filterSections.color ? "rotate-180" : "rotate-0"}

              `}
            />
          </button>

          <div
            className={`

              grid

              transition-all

              duration-300

              ease-out



              ${
                filterSections.color
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }

            `}
          >
            <div className="overflow-hidden">
              <div className="flex flex-wrap gap-3">
                {filterColors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Color ${index + 1}`}
                    className="

                      h-6

                      w-6



                      rounded-full

                      border

                      border-black/10



                      transition-transform

                      duration-300



                      hover:scale-125

                    "
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 h-px bg-black/5" />

        {/* ========================================= */}

        {/* ============ MOBILE PRICE =============== */}

        {/* ========================================= */}

        <div>
          <button
            type="button"
            onClick={() => toggleFilterSection("price")}
            className="flex w-full items-center justify-between"
          >
            <p className="font-semibold text-black">Price</p>

            <ChevronDown
              size={16}
              className={`

        transition-transform

        duration-300



        ${filterSections.price ? "rotate-180" : "rotate-0"}

      `}
            />
          </button>

          <div
            className={`

      grid

      transition-all

      duration-300

      ease-out



      ${
        filterSections.price
          ? "mt-5 grid-rows-[1fr] opacity-100"
          : "mt-0 grid-rows-[0fr] opacity-0"
      }

    `}
          >
            <div className="overflow-hidden">
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="

          w-full

          cursor-pointer

          accent-[#C900C1]

        "
              />

              <div className="mt-2 flex justify-between text-xs text-gray-400">
                <span>${price}</span>

                <span>$1000</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}

        {/* =========== MOBILE DISCOUNT ============= */}

        {/* ========================================= */}

        <div>
          <button
            type="button"
            onClick={() => toggleFilterSection("discount")}
            className="flex w-full items-center justify-between"
          >
            <p className="font-semibold text-black">Discount Range</p>

            <ChevronDown
              size={16}
              className={`

                transition-transform

                duration-300



                ${filterSections.discount ? "rotate-180" : "rotate-0"}

              `}
            />
          </button>

          <div
            className={`

              grid

              transition-all

              duration-300

              ease-out



              ${
                filterSections.discount
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }

            `}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-3">
                {discounts.map((discount) => (
                  <label
                    key={discount}
                    className="

                      flex

                      cursor-pointer

                      items-center

                      gap-2



                      text-sm

                      text-gray-500

                    "
                  >
                    <input type="checkbox" className="accent-[#C900C1]" />

                    {discount}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Apply */}

        <button
          type="button"
          onClick={() => setIsFilterOpen(false)}
          className="

            mt-8

            w-full



            rounded-full

            bg-black



            px-5

            py-3



            text-sm

            font-semibold

            text-white



            transition-all

            duration-300



            hover:-translate-y-1

            hover:bg-[#C900C1]

            hover:shadow-[0_10px_30px_rgba(201,0,193,0.25)]



            active:scale-[0.97]

          "
        >
          Apply This Filter
        </button>
      </aside>
    </main>
  );
}

export default CategoryPage;
