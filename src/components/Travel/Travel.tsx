import { destinations } from "../data/destinations";
import DestinationCard from "./DestinationCard";

export default function Travel() {
  return (
    <section id="travel" className="bg-[#F3F8F6] py-40 flex-col flex justify-center">
      <div className="container mx-auto  pt-15 text-center">
        <h1 className="md:text-5xl text-black font-bold">
          Popular Destination
        </h1>
        <p className="md:text-md text-gray-400 mt-5">
          Something that you never seeing before in this world
        </p>
      </div>

      {/* Grid Card */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            country={dest.country}
            location={dest.location}
            image={dest.image}
          />
        ))}
      </div>
    </section>
  );
}
