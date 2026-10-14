function BlogCard({ blog }) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white shadow-sm">
      <img
        src={blog.image}
        alt={blog.title}
        className="h-56 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-xs text-gray-500">Furniture</p>

        <h3 className="text-xl font-bold">{blog.title}</h3>

        <p className="mt-3 text-sm text-gray-600">{blog.description}</p>

        {/* Author */}
        <div className="mt-auto flex items-center gap-3 pt-6">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="h-9 w-9 rounded-full object-cover"
          />

          <div>
            <p className="text-xs text-gray-600">{blog.author}</p>

            <p className="text-[10px] text-gray-400">
              {blog.date} · {blog.readTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
