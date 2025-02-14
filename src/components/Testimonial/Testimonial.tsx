import { testimonial } from "../data/testimonial";
import TestiCard from "./TestiCard";

export default function Testimonial() {
    return (
      <section className="relative bg-white py-28 flex flex-col justify-center overflow-visible text-black">
        <div className="container mx-auto text-center">
          <h1 className="md:text-5xl text-black font-bold">Our Customer Says</h1>
          <p className="md:text-md text-gray-400 mt-5">
            Moments were giving them the best experience
          </p>
        </div>
  
        {/* Gambar Background */}
        <div className="w-full h-[350px] bg-black mt-10 relative flex items-center justify-center">
          <img
            src="/images/img-2.png"
            alt="Banner"
            className="w-full h-full object-cover"
          />
  
          {/* Container Testimonial Cards */}
          <div className="hidden absolute bottom-[10%] w-full md:flex justify-center items-center gap-10 px-6">
            {testimonial.map((testi, index) => {
              const positions: React.CSSProperties[] = [
                { top: "50%", left: "10%", transform: "translateY(-50%)" },
                { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
                { top: "50%", right: "10%", transform: "translateY(-50%)" },
              ];
              return <TestiCard key={testi.id} {...testi} style={positions[index]} />;
            })}
          </div>
        </div>
      </section>
    );
  }