import blog from "../assets/blog.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();
  const blogPosts = [
    {
      title: "The Future of AI: Trends to Watch in 2025",
      image: blog,
      views: "500+",
      category: "Tech",
      type: "image",
    },
    {
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      image: blog1,
      views: "320+",
      category: "Finance",
      type: "image",
    },
    {
      title: "Cybersecurity in 2025: How to Stay Protected",
      image: blog2,
      views: "420+",
      category: "Security",
      type: "image",
    },
    {
      title: "Mental wellness while you work",
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      views: "1.2K",
      category: "Health",
      type: "video",
      date: "Dec 13, 2022",
      duration: "3 minute",
    },
    {
      title: "The Rise of Remote Work: Technologies Powering the Shift",
      image: blog3,
      views: "390+",
      category: "Work",
      type: "image",
    },
    {
      title: "5G Technology: What It Means for the Future of Connectivity",
      image: blog4,
      views: "700+",
      category: "Telecom",
      type: "image",
    },
    {
      title: "Mental wellness while you work",
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      views: "1.2K",
      category: "Health",
      type: "video",
      date: "Dec 13, 2022",
      duration: "3 minute",
    },
    {
      title: "5G Technology: What It Means for the Future of Connectivity",
      image: blog5,
      views: "700+",
      category: "Telecom",
      type: "image",
    },
  ];

  return (
    <div className="w-full mx-auto px-8 font-sora md:px-24 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <span className="text-gray-500 text-sm">CATEGORIES ↓</span>
      </div>

      {/* 4-column responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm relative"
          >
            {post.type === "video" ? (
              <div className="relative h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 text-xs font-medium">
                  {post.date}
                </div>
                <div className="absolute top-3 left-24 bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.duration}
                </div>

                <div className="absolute bottom-4 left-4 flex items-center">
                  <button
                    className="bg-white bg-opacity-90 rounded-full p-2 mr-2 shadow-sm"
                    onClick={() => {
                      navigate("/detail");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <span className="text-white text-sm font-medium drop-shadow-md">
                    Watch this video
                  </span>
                </div>
                <div className="absolute top-1/3 right-4 bg-white rounded-xl px-3 py-2 shadow-md">
                  <h3 className="font-bold text-sm">{post.title}</h3>
                </div>
              </div>
            ) : (
              <>
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-3 right-3 bg-white rounded-full p-1.5"
                    onClick={() => {
                      navigate("/detail");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">
                    • {post.category}
                  </div>
                  <h2 className="text-sm font-bold leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500">{post.views} views</p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Body;
