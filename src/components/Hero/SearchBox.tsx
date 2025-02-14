import { FiMapPin, FiUsers, FiCalendar } from "react-icons/fi";

export default function SearchBox() {
  return (
    <div className="bg-white px-10 py-5 rounded-[25px] shadow-md text-black max-w-[1200px] w-full absolute -top-12">
      <div className="flex items-center justify-between gap-4">
        {/* Location */}
        <div className="search-item flex-1">
          <label className="flex items-center gap-2 text-gray-500 text-sm">
            <FiMapPin className="text-lg text-[#1EC28B]" />
            Location
          </label>
          <input
            type="text"
            placeholder="Where to?"
            className="w-full p-2 border-none focus:outline-none"
          />
        </div>

        {/* Person */}
        <div className="search-item flex-1">
          <label className="flex items-center gap-2 text-gray-500 text-sm">
            <FiUsers className="text-lg text-[#1EC28B]" />
            Person
          </label>
          <input
            type="number"
            placeholder="Guests"
            className="w-full p-2 border-none focus:outline-none"
          />
        </div>

        {/* Check-in */}
        <div className="search-item flex-1">
          <label className="flex items-center gap-2 text-gray-500 text-sm">
            <FiCalendar className="text-lg text-[#1EC28B]" />
            Check-in
          </label>
          <input
            type="date"
            className="w-full p-2 border-none focus:outline-none"
          />
        </div>

        {/* Check-out */}
        <div className="search-item flex-1">
          <label className="flex items-center gap-2 text-gray-500 text-sm">
            <FiCalendar className="text-lg text-[#1EC28B]" />
            Check-out
          </label>
          <input
            type="date"
            className="w-full p-2 border-none focus:outline-none"
          />
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <button className="bg-[#1EC28B] text-white px-10 py-3 rounded-2xl hover:bg-[#1BB480]">
            Search Place
          </button>
        </div>
      </div>
    </div>
  );
}
