import Button from "../components/Button";
import Img1 from "../assets/images/1.png";
import Img2 from "../assets/images/2.png";
import Img3 from "../assets/images/3.png";
import Layer1 from "../assets/images/Layer_1.png";

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-fuchsia-50 to-pink-100">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          px-4
          py-10
          sm:px-6
          sm:py-12
          lg:grid-cols-2
          lg:gap-14
          lg:px-8
          lg:py-16
        "
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1
            className="
              mb-5
              text-4xl
              font-bold
              leading-tight
              text-black
              sm:text-5xl
              lg:mb-6
              lg:text-6xl
            "
          >
            Discover the Latest
            <br />
            <span className="relative inline-block">
              Furniture Trends
              <img
                src={Layer1}
                alt=""
                className="
                  absolute
                  -bottom-2
                  left-1/2
                  w-full
                  max-w-[280px]
                  -translate-x-1/2
                  lg:left-0
                  lg:translate-x-0
                "
              />
            </span>
          </h1>

          <p
            className="
              mx-auto
              mb-7
              max-w-md
              text-sm
              leading-6
              text-gray-600
              sm:text-base
              lg:mx-0
              lg:mb-8
            "
          >
            Shop the latest furniture items and discover modern styles for your
            home.
          </p>

          <Button
            variant="primary"
            color="black"
            className="
    group
    !rounded-2xl
    !px-8
    !py-3.5

    text-[15px]
    font-semibold
    tracking-wide

    shadow-[0_8px_25px_rgba(0,0,0,0.14)]

    transition-all
    duration-300
    ease-out

    hover:!bg-[#C900C1]
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-[0_14px_35px_rgba(201,0,193,0.28)]

    active:translate-y-0
    active:scale-[0.98]
  "
          >
            <span className="flex items-center gap-2">
              Explore More
              <span
                className="
        inline-block
        transition-transform
        duration-300
        ease-out
        group-hover:translate-x-1.5
      "
              >
                →
              </span>
            </span>
          </Button>
        </div>

        {/* Images */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:gap-4
          "
        >
          <div className="overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
            <img
              src={Img1}
              alt="Modern chair"
              className="
                h-40
                w-full
                object-cover
                sm:h-52
                lg:h-56
              "
            />
          </div>

          <div className="overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
            <img
              src={Img2}
              alt="Furniture chair"
              className="
                h-40
                w-full
                object-cover
                sm:h-52
                lg:h-56
              "
            />
          </div>

          <div className="col-span-2 overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
            <img
              src={Img3}
              alt="Modern sofa"
              className="
                h-52
                w-full
                object-cover
                sm:h-64
                lg:h-72
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
