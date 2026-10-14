import useCart from "@/Store/use-cart";

function ProductCard({ product }) {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div
      className="
        group/card
        relative
        overflow-hidden
        rounded-3xl
        border
        border-transparent
        bg-white/40
        p-3

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:border-fuchsia-300/40
        hover:shadow-[0_22px_55px_rgba(201,0,193,0.16)]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-20
          bg-gradient-to-br
          from-fuchsia-400/0
          via-fuchsia-400/10
          to-purple-400/0
          opacity-0
          blur-3xl

          transition-all
          duration-700

          group-hover/card:opacity-100
        "
      />

      {/* Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          bg-white
        "
      >
        <img
          src={product.image}
          alt={product.title}
          className="
            h-44
            w-full
            object-cover

            transition-all
            duration-700
            ease-out

            sm:h-48
            lg:h-52

            group-hover/card:scale-110
          "
        />

        {/* Shine */}
        <div
          className="
            pointer-events-none
            absolute
            -left-[120%]
            top-0
            h-full
            w-[55%]
            skew-x-[-20deg]

            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent

            transition-all
            duration-700

            group-hover/card:left-[130%]
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-4">
        <h3
          className="
            text-sm
            font-semibold
            text-gray-500

            transition-all
            duration-300

            sm:text-[15px]

            group-hover/card:translate-x-1
            group-hover/card:text-black
          "
        >
          {product.title}
        </h3>

        {/* Colors */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {product.colors?.map((color, index) => (
            <span
              key={index}
              className="
                h-2.5
                w-2.5
                rounded-full

                transition-all
                duration-300

                group-hover/card:scale-125
              "
              style={{
                backgroundColor: color,
                transitionDelay: `${index * 50}ms`,
              }}
            />
          ))}
        </div>

        {/* Bottom */}
        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            gap-3

            sm:mt-6
          "
        >
          <p
            className="
              shrink-0
              text-base
              font-bold
              text-black

              transition-all
              duration-300

              sm:text-lg

              group-hover/card:scale-105
              group-hover/card:text-[#C900C1]
            "
          >
            ${product.price}
          </p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="
              rounded-full
              bg-indigo-100
              px-3
              py-1.5

              text-xs
              font-medium
              text-black
              whitespace-nowrap

              transition-all
              duration-300
              ease-out

              hover:-translate-y-0.5
              hover:bg-[#C900C1]
              hover:text-white
              hover:shadow-[0_8px_20px_rgba(201,0,193,0.25)]

              active:scale-95

              sm:px-4
              sm:py-2
              sm:text-sm
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
