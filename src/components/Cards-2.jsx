import BlogCard from "../components/CardBlog";

import Img1 from "../assets/images/BlogImg/1.png";
import Img2 from "../assets/images/BlogImg/2.png";
import Img3 from "../assets/images/BlogImg/3.png";
import person from "../assets/images/BlogImg/Ellipse 1.png";

const blogs = [
  {
    id: 1,
    image: Img1,
    title: "The Latest Furniture Trends for Spring",
    description: "Discover the modern trends for the upcoming spring season",
    author: "Emily Johnson",
    authorImage: person,
    date: "11 Jan 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: Img2,
    title: "Modern Furniture Trends for Summer",
    description: "Explore the modern trends for the upcoming spring season",
    author: "Sara",
    authorImage: person,
    date: "08 Jan 2023",
    readTime: "3 min read",
  },
  {
    id: 3,
    image: Img3,
    title: "Explore Stylish Furniture Trends for Spring",
    description: "Know the modern trends for the upcoming event",
    author: "Rakib Roni",
    authorImage: person,
    date: "11 Jan 2023",
    readTime: "5 min read",
  },
];

function BlogSection() {
  return (
    <section
      className="
        bg-slate-100
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
        {/* ================= TOP ================= */}

        <div
          className="
            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Text */}
          <div className="max-w-2xl">
            <p
              className="
                mb-3
                text-sm
                font-medium
                text-[#C900C1]
                sm:mb-4
              "
            >
              Furniture
            </p>

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
              Discover the Latest Trends
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-gray-500

                sm:text-base
                sm:leading-7
              "
            >
              Stay Updated With Our Information And Engaging Blog Posts About
              Modern Furniture And Fashion On The Industry
            </p>
          </div>

          {/* Explore Button */}
          <button
            type="button"
            className="
              group
              flex
              w-full
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
              hover:shadow-[0_12px_30px_rgba(201,0,193,0.25)]

              active:translate-y-0
              active:scale-[0.98]

              sm:w-fit
            "
          >
            Explore
            <span
              className="
                inline-block
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
            >
              →
            </span>
          </button>
        </div>

        {/* ================= BLOG CARDS ================= */}

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
          "
        >
          {blogs.map((blog) => (
            <div key={blog.id} className="h-full">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
