function Detail() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sora ">
      {/* Header */}
      <div className="mb-2  my-16">
        <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">
          ARTICLE
        </div>
        <h1 className="text-2xl font-medium mb-3">
          Moments that matter <span className="text-gray-400">—</span>
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Creating timeless wedding photography since 2015
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-6">
        Our philosophy for natural and authentic moments lies in the way we
        connect with each other. We believe that the most beautiful images are
        created when you feel comfortable and relaxed, allowing your genuine
        emotions to shine through in every frame.
      </p>

      {/* Main Image */}
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Wedding couple on cliff at sunset"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      {/* Steps Section */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-3">
          Steps <span className="text-gray-400">—</span>
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Our process starts with a call to discuss your vision for the wedding
          day. Then we visit the venue to scout locations and lighting. On your
          special day, we arrive early to capture all the preparations and stay
          until the final moments.
        </p>
      </div>

      {/* Results Section */}
      <div>
        <h2 className="text-lg font-medium mb-3">Time for results</h2>
        <p className="text-sm text-gray-600 mb-2">
          After the event, it takes us 3-4 weeks to deliver your complete
          gallery. We carefully select and edit each image to ensure the highest
          quality. receive a mix of color and black & white photos that tell the
          complete story of your day, from getting ready to the final dance.
        </p>
        <p className="text-sm text-gray-600">
          We also offer premium albums and prints to showcase your favorite
          moments in a tangible, lasting way that you can cherish for
          generations.
        </p>
      </div>
    </div>
  );
}
export default Detail;
