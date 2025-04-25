import blog from "../assets/blog.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";

// import blog6 from "../assets/blog6.jpg";
// import blog7 from "../assets/blog7.jpg";

function Post() {
  const blogPosts = [
    {
      title: "The Future of AI: Trends to Watch in 2025",
      image: blog,
      views: "500+",
    },
    {
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      image: blog1,
      views: "320+",
    },
    {
      title: "Cybersecurity in 2025: How to Stay Protected",
      image: blog2,
      views: "420+",
    },
    {
      title: "The Rise of Remote Work: Technologies Powering the Shift",
      image: blog3,
      views: "390+",
    },
    {
      title: "5G Technology: What It Means for the Future of Connectivity",
      image: blog4,
      views: "700+",
    },
    {
      title: "5G Technology: What It Means for the Future of Connectivity",
      image: blog5,
      views: "700+",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sora ">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <span className="text-gray-500 text-sm">CATEGORIES ↓</span>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* First Post - Car */}
        <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-sm relative">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="White sports car on horizon"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-3 right-3 bg-white rounded-full p-1.5">
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
            <div className="text-xs text-gray-500 mb-1">• Cars and trucks</div>
            <h2 className="text-lg font-bold leading-tight">
              Unique hand crafted vehicles for small circle of people
            </h2>
          </div>
        </div>

        {/* Second Post - Mental Wellness */}
        <div className="md:col-span-5 bg-white rounded-2xl overflow-hidden shadow-sm relative">
          <div className="relative h-80">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Person with headphones reading"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 text-xs font-medium">
              Dec 13, 2022
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
              3 minute
            </div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <button className="bg-white bg-opacity-90 rounded-full p-2 mr-2 shadow-sm">
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
            <button className="absolute top-3 right-3 bg-white rounded-full p-1.5">
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
            <div className="absolute top-1/3 right-4 bg-white rounded-xl px-3 py-2 shadow-md">
              <h3 className="font-bold">
                Mental wellness while
                <br />
                you work
              </h3>
            </div>
          </div>
        </div>

        {/* Third Post - Fashion */}
        <div className="md:col-span-3 bg-white rounded-2xl overflow-hidden shadow-sm relative">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Fashion item"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-3 right-3 bg-white rounded-full p-1.5">
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
            <div className="text-xs text-gray-500 mb-1">• Fashion</div>
            <h2 className="text-lg font-bold leading-tight">
              Dancing at the edge of the world
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
