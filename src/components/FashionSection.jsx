import { ArrowLeft, ArrowRight } from "lucide-react";
import fashion from "../assets/images/Fashion.png";

function FashionSection() {
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
        {/* Arrows */}
        <div
          className="
            mb-8
            flex
            justify-end
            gap-3
            sm:mb-10
          "
        >
          <button
            type="button"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-gray-400

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-black
              hover:bg-black
              hover:text-white
              hover:shadow-md

              active:scale-95
            "
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-gray-400

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-black
              hover:bg-black
              hover:text-white
              hover:shadow-md

              active:scale-95
            "
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Content */}
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* Left Side */}
          <div>
            <div
              className="
                mb-4
                h-6
                w-6
                rounded-tl-full
                bg-fuchsia-500
              "
            />

            <h2
              className="
                max-w-lg
                text-3xl
                font-bold
                leading-tight
                text-black

                sm:text-4xl
                lg:text-[42px]
              "
            >
              Enjoy Our Latest Fashion Trends
              <br className="hidden sm:block" />
              <span className="sm:ml-0"> and Style</span>
            </h2>

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-gray-700

                sm:mt-6
                sm:text-base
                lg:text-lg
                lg:leading-8
              "
            >
              Ship our curated collection of fashion items and stay ahead of the
              fashion game
            </p>

            {/* Features */}
            <div
              className="
                mt-10
                grid
                gap-8

                sm:mt-12
                sm:grid-cols-2
                sm:gap-10

                lg:mt-16
              "
            >
              <div>
                <h3 className="text-lg font-bold sm:text-xl">Quality</h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Our fashion items are crafted with the highest materials and
                  attention to details
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold sm:text-xl">Style</h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Express you unique style with our wide range of trendy items.
                </p>
              </div>
            </div>

            {/* Explore */}
            <div
              className="
                mt-10
                flex
                justify-start

                sm:mt-12

                lg:mt-16
                lg:justify-end
              "
            >
              <button
                type="button"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3

                  rounded-xl
                  bg-black
                  px-7
                  py-3.5

                  text-sm
                  font-medium
                  text-white

                  shadow-[0_8px_24px_rgba(0,0,0,0.15)]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-1
                  hover:bg-[#C900C1]
                  hover:shadow-[0_14px_35px_rgba(201,0,193,0.28)]

                  active:translate-y-0
                  active:scale-[0.98]
                "
              >
                Explore
                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="
              overflow-hidden
              rounded-[24px]
              sm:rounded-[32px]
              lg:rounded-[40px]
            "
          >
            <img
              src={fashion}
              alt="Latest Fashion"
              className="
                h-[320px]
                w-full
                object-cover

                transition-transform
                duration-700
                ease-out

                hover:scale-[1.03]

                sm:h-[420px]
                md:h-[500px]
                lg:h-[570px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FashionSection;
