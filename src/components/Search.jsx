function Search() {
  return (
    <div className="relative min-h-screen font-sora w-full bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="wave"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,100 C40,80 60,120 100,100 C140,80 160,120 200,100 L200,200 L0,200 Z"
                fill="white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full px-4 py-16 flex flex-col md:flex-row gap-8 items-center">
        {/* Floating Cards */}
        <div className="absolute -top-10 left-10 animate-float bg-white rounded-lg p-3 shadow-lg transform -rotate-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">JD</span>
            </div>
            <div className="text-xs">
              <p className="font-medium">Profile View</p>
              <p className="text-gray-500">+15% this week</p>
            </div>
          </div>
        </div>

        <div className="absolute top-20 -right-10 animate-float-delayed bg-white rounded-lg p-3 shadow-lg transform rotate-3">
          <div className="text-xs font-medium">Your Progress</div>
          <div className="mt-2 flex space-x-1">
            <div className="w-6 h-12 bg-pink-300 rounded"></div>
            <div className="w-6 h-16 bg-pink-500 rounded"></div>
            <div className="w-6 h-8 bg-pink-200 rounded"></div>
          </div>
        </div>

        <div className="absolute -bottom-5 -left-5 animate-float-slow bg-white rounded-lg p-3 shadow-lg transform -rotate-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">MS</span>
            </div>
            <div className="text-xs">
              <p className="font-medium">Product Design Manager</p>
              <p className="text-gray-500">Microsoft • Remote</p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-10 right-20 animate-float-slower bg-white rounded-lg p-3 shadow-lg transform rotate-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">GG</span>
            </div>
            <div className="text-xs">
              <p className="font-medium">UX Researcher</p>
              <p className="text-gray-500">Google • New York</p>
            </div>
          </div>
        </div>

        {/* Right Side: Main Call-To-Action */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Modernizing the Job
            <br />
            Search Experience
          </h1>
          <p className="text-gray-700 mb-6">
            Discover your next career opportunity with our AI-powered job
            matching platform. Find roles that align with your skills and
            aspirations.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Stories, Jokes, or Blogs"
                className="w-full pl-10 pr-4 py-3 bg-white rounded-full border-none focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
              />
            </div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full shadow-md transition-colors duration-200">
              Search
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(-6deg);
          }
          50% {
            transform: translateY(-10px) rotate(-6deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0) rotate(3deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(-3deg);
          }
          50% {
            transform: translateY(-8px) rotate(-3deg);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0) rotate(6deg);
          }
          50% {
            transform: translateY(-12px) rotate(6deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 9s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Search;
