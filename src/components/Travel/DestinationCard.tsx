interface DestinationProps {
    country: string;
    location: string;
    image: string;
  }
  
  export default function DestinationCard({ country, location, image }: DestinationProps) {
    return (
      <div className="bg-white rounded-lg shadow-lg max-w-[450px] overflow-hidden mx-auto">
        {/* Gambar dengan overlay di bagian atas dan bawah */}
        <div className="relative">
          <img src={image} alt={country} className="w-full h-[450px] object-cover" />
  
          {/* Overlay di bagian atas dan bawah saja */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 flex flex-col justify-between p-5">
            {/* Country & Location (di atas) */}
            <div className="text-center">
              <h2 className="text-xl font-medium uppercase text-white">{country}</h2>
              <p className="text-xl font-semibold text-white mt-1">{location}</p>
            </div>
  
            {/* Tombol View More (di bawah) */}
            <button className="bg-[#1EC28B] text-white px-5 py-3 rounded-lg hover:bg-[#1BB480] max-w-[135px] mx-auto">
              View More
            </button>
          </div>
        </div>
      </div>
    );
  }
  