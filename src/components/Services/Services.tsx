export default function Services() {
    return (
      <section id="service" className="bg-white py-32 flex justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Gambar */}
          <div className="flex-1">
            <img
              src="/images/img-1.png"
              alt="img1"
              className="rounded-lg"
            />
          </div>
  
          {/* Deskripsi */}
          <div className="flex-1 text-black p-4 md:p-0">
            <h3 className="text-xl font-semibold text-[#1EC28B]">Our Experience</h3>
            <h1 className="text-[48px] font-bold mt-2">We help you find your dream vacation</h1>
            <p className="mt-4 text-gray-400 max-w-[650px]">
              Created specifically for the needs of travel agencies on
              award-winning Zoho CRM, Travel Agency CRM delivers outstanding value
              with an astounding array of features for a fraction of the cost of
              any comparable industry system.
            </p>
  
            {/* Informasi */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-2 gap-6">
              <div>
                <h1 className="text-3xl font-bold text-[#1EC28B]">20+</h1>
                <p className="text-black font-bold text-xl">Holiday Package</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#1EC28B]">100+</h1>
                <p className="text-black font-bold text-xl">Luxury Hotel</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#1EC28B]">15+</h1>
                <p className="text-black font-bold text-xl">Elite Airlines</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#1EC28B]">87M+</h1>
                <p className="text-black font-bold text-xl">Satisfied Traveler</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
  }
  