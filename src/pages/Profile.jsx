import Body from "../components/Body";
function Profile() {
  return (
    <div className="min-h-screen bg-white font-sora ">
      {/* Profile Section */}
      <div className="bg-white px-6 py-8 ">
        <div className="flex flex-col my-12 md:flex-row items-start md:items-center">
          {/* Profile Image */}
          <div className="w-48 h-48 border-48 overflow-hidden border-4 border-white shadow-lg mr-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e9n2dwDrH2J34lKIyF7guVRjQVqE3R.png"
              alt="Irene Brooks"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="mt-4 md:mt-0 flex-1">
            <div className="flex items-center mb-1">
              <h1 className="text-xl font-bold mr-2">Irene Brooks</h1>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              Interface and Brand Designer
            </p>
            <p className="text-gray-500 text-xs mb-3">Dribbble San Antonio</p>
          </div>

          {/* Stats */}
          <div className="mt-4 md:mt-0 flex space-x-6">
            <div className="text-center">
              <p className="font-bold text-xl">2,985</p>
              <p className="text-gray-500 text-xs">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">132</p>
              <p className="text-gray-500 text-xs">Following</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">548</p>
              <p className="text-gray-500 text-xs">Likes</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mt-6">
          <button className="px-4 py-2 border-b-2 border-gray-900 font-medium text-sm">
            Work
          </button>
          <button className="px-4 py-2 text-gray-500 text-sm hover:text-rose-300">
            Moodboards
          </button>
          <button className="px-4 py-2 text-gray-500 text-sm">Likes</button>
          <button className="px-4 py-2 text-gray-500 text-sm">About</button>
        </div>
      </div>

      {/* Projects Grid */}
      <Body />
    </div>
  );
}

export default Profile;
