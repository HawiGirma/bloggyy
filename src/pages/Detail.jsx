function Detail() {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <div className="grid grid-cols-1 my-16 md:grid-cols-3 gap-8 font-sora">
        {/* Left Column - Main Article */}
        <div className="md:col-span-2">
          {/* Date Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-500 text-sm">Thursday</div>
              <h1 className="text-4xl font-bold">February 12</h1>
            </div>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-sm">
              New
            </button>
          </div>

          {/* Main Article */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="City street at night"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Author"
                  className="w-8 h-8 rounded-full mr-3"
                />
                <span className="text-sm text-gray-600">Robert Fox</span>
                <div className="ml-auto flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-3">
                How to create a mobile banking app in 2023-2024: Key features,
                tech stack, and common pitfalls
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                The mobile banking market is booming nowadays, but some
                entrepreneurs still make the same mistakes and end up with a
                product that meet customer needs. In this article, look at 5 key
                features to include in your solution.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Also discuss the tech stack that will help you build a secure
                and user-friendly app. And most importantly, tell you what
                difficulties you may encounter on this path and how to avoid
                them so you can release a successful product.
              </p>
              <button className="w-full py-3 border-t border-gray-200 text-center text-gray-600 hover:text-gray-900">
                Read all
              </button>
            </div>
          </div>

          {/* Bottom Articles */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-sm mb-2">
                Top ways data management services can increase your business
                efficiency
              </h3>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="text-xs text-gray-500 ml-2">Jan 15, 2024</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-sm mb-2">
                How to build an MVP to test the market in 2023
              </h3>
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="text-xs text-gray-500 ml-2">Jan 10, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Trending & Subscribe */}
        <div className="md:col-span-1">
          {/* Trending Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-sm font-medium">Trending</span>
                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
              <button className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1">
                View all
              </button>
            </div>

            {/* Trending Articles */}
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold mb-1">
                  Understanding the role of AI in software development
                </h3>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500">
                    Jan 20 • 5 min read
                  </span>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold mb-1">
                  Maximizing business efficiency: Why you need to know about the
                  software development process
                </h3>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500">
                    Jan 18 • 7 min read
                  </span>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold mb-1">
                  How AI-based knowledge management systems help companies
                  improve performance
                </h3>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500">
                    Jan 15 • 6 min read
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Authors Section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-4">Our authors</h3>
            <div className="flex space-x-2">
              <div className="text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Author"
                  className="w-10 h-10 rounded-full mx-auto mb-1"
                />
                <span className="text-xs block">Robert</span>
              </div>
              <div className="text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Author"
                  className="w-10 h-10 rounded-full mx-auto mb-1"
                />
                <span className="text-xs block">Alexandra</span>
              </div>
              <div className="text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="Author"
                  className="w-10 h-10 rounded-full mx-auto mb-1"
                />
                <span className="text-xs block">Michael</span>
              </div>
              <div className="text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Author"
                  className="w-10 h-10 rounded-full mx-auto mb-1"
                />
                <span className="text-xs block">Emily</span>
              </div>
            </div>
          </div>

          {/* Subscribe Box */}
          <div className="bg-green-100 rounded-xl p-6">
            <h3 className="font-bold uppercase text-sm mb-4">
              Subscribe to read more
            </h3>
            <p className="text-xs text-gray-700 mb-4">
              Get unlimited access to all articles on our website and mobile
              app. Stay informed with the latest insights and trends.
            </p>
            <button className="bg-black text-white text-sm py-2 px-4 rounded-full w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
