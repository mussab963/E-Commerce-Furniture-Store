import customerImage from "../assets/images/BlogImg/Image.png";

const stats = [
  {
    value: "10x",
    label: "Increase in productivity",
  },
  {
    value: "300%",
    label: "Return on investment",
  },
  {
    value: "5k+",
    label: "Happy customers",
  },
  {
    value: "100+",
    label: "5-star reviews",
  },
];

function SuccessSection() {
  return (
    <section
      className="
        bg-white
        py-12
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-10
          px-4

          sm:px-6

          lg:grid-cols-2
          lg:gap-16
          lg:px-8
        "
      >
        {/* Image */}
        <div
          className="
            overflow-hidden
            rounded-[24px]
            sm:rounded-[32px]
            lg:rounded-[45px]
          "
        >
          <img
            src={customerImage}
            alt="Happy customer"
            className="
              h-[320px]
              w-full
              object-cover

              transition-transform
              duration-700
              ease-out

              hover:scale-[1.03]

              sm:h-[420px]
              md:h-[480px]
              lg:h-[550px]
            "
          />
        </div>

        {/* Content */}
        <div>
          <p
            className="
              text-sm
              font-medium
              text-black
            "
          >
            Customer Stories
          </p>

          <h2
            className="
              mt-3
              max-w-xl
              text-3xl
              font-bold
              leading-tight
              text-[#C900C1]

              sm:mt-4
              sm:text-4xl

              lg:text-5xl
            "
          >
            Success History of
            <br className="hidden sm:block" />
            <span> Our Customer</span>
          </h2>

          <p
            className="
              mt-4
              max-w-lg
              text-sm
              leading-6
              text-[#C900C1]/80

              sm:mt-6
              sm:text-base
            "
          >
            Emphasis time-saving and use numbers to maximize credibility.
          </p>

          {/* Statistics */}
          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-x-6
              gap-y-8

              sm:mt-10
              sm:gap-x-12
              sm:gap-y-10

              lg:gap-x-16
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  group
                  rounded-2xl
                  p-3

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-fuchsia-50
                "
              >
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-gray-500

                    transition-colors
                    duration-300

                    group-hover:text-[#C900C1]

                    sm:text-4xl
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-gray-500

                    sm:text-sm
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessSection;
