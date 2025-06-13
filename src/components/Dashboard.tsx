const Dashboard = () => {
  return (
    <div className="w-full h-full p-5 bg-gray-50">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div className="font-sans">
          <span className="text-base md:text-sm text-red-600 font-bold">
            <span>
              <a
                href="/products"
                className="text-base md:text-sm text-red-600 font-bold no-underline hover:underline"
              >
                SHOP NOW
              </a>
              <p></p>
              <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                Welcome to Amigo Estore
              </h1>
              <p className="text-sm md:text-base font-normal text-gray-600">
                Nepal's Premier Multi-Vendor Shoe Marketplace
              </p>
            </span>
          </span>
        </div>

        <p className="py-6">
          👋 Step into Nepal's largest collection of footwear at{" "}
          <span className="text-red-600 font-semibold">Amigo Estore</span> - 
          where style meets comfort across hundreds of brands. Discover the perfect pair 
          from local artisans and international vendors all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2">🏬 Multi-Vendor Platform</h3>
            <p>Shop from dozens of trusted Nepalese shoe vendors with verified quality</p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2">🚚 Nationwide Delivery</h3>
            <p>Reliable shipping to all 77 districts of Nepal</p>
          </div>
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2">👟 Curated Collections</h3>
            <p>From sneakers to sandals, formal to sports - we've got every style</p>
          </div>
        </div>

        <h2 className="py-4 font-sans text-2xl font-bold border-b border-gray-200">
          Featured Categories
        </h2>
        
        <div className="flex flex-wrap gap-4 py-6">
          {['Sports Shoes', 'Casual Wear', 'Formal Shoes', 'Sandals', 'Local Handicrafts', 'Winter Boots'].map((category) => (
            <span 
              key={category}
              className="px-4 py-2 bg-white border border-red-100 rounded-full text-red-700 hover:bg-red-50 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        <blockquote className="border-l-4 border-red-500 italic my-8 pl-8 md:pl-12 bg-red-50 p-4 rounded-r">
          "Amigo Estore revolutionized my shoe business in Nepal. Within months, 
          my sales grew 300% thanks to their nationwide reach." 
          <br/>- <span className="font-semibold">Rajesh Shoe Emporium, Kathmandu</span>
        </blockquote>

        <div className="py-6 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg mb-4">Why Choose Amigo Estore?</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <span className="font-semibold">100% Authentic:</span> Every product undergoes strict quality verification
            </li>
            <li>
              <span className="font-semibold">Easy Returns:</span> 7-day hassle-free return policy across Nepal
            </li>
            <li>
              <span className="font-semibold">Secure Payments:</span> Multiple payment options including cash on delivery
            </li>
          </ol>
        </div>

        <div className="py-6 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Explore 5000+ Shoes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;