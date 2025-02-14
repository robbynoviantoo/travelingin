export default function Newsletter() {
    return (
      <section className="relative bg-[#1EC28B] py-20 flex justify-center overflow-visible">
        <div className="container relative z-10 px-6">
          <div className="max-w-2xl">
            <h1 className="text-[48px] font-bold text-white">Subscribe to our Newsletter</h1>
            <p className="max-w-[500px] text-white mt-4">
              Join our newsletter and discover new destinations to inspire the
              traveler within. Plus, get 20% off at our online shop.
            </p>
  
            {/* Input Form */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[350px] px-4 py-3 text-black rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-[#1EC28B] font-semibold rounded-md hover:bg-gray-200 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Gambar di Sebelah Kanan */}
        <img
          src="/images/menara.png"
          alt="Newsletter"
          className="absolute right-[20%] bottom-0 z-0 w-auto max-w-[900px] h-auto object-contain"
        />
      </section>
    );
  }
  