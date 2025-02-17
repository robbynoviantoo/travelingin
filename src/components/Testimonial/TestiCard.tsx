import { FaStar } from "react-icons/fa";

interface TestiProps {
  name: string;
  says: string;
  stars: number;
  image: string;
  style?: React.CSSProperties; // Mengubah tipe style menjadi CSSProperties
}

export default function TestiCard({ name, says, stars, image, style }: TestiProps) {
  return (
    <div
      className="bg-white shadow-lg rounded-xl p-6 w-80 h-[360px] text-center absolute"
      style={style} 
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 mt-2">{says}</p>
      <div className="flex justify-center mt-3 text-[#FFD700]">
        {Array.from({ length: stars }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    </div>
  );
}
