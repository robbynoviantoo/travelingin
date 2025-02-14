export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-travel.png')" }}
    >
      {/* Overlay (opsional agar teks lebih jelas) */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Konten */}
      <div className="relative z-10 max-w-[850px] mx-auto px-4">
        <h1 className="text-6xl md:text-[70px] font-bold leading-tight">
          Discover and Enjoy Trip <br /> Make it More Memorable
        </h1>
        <p className="md:text-xl max-w-[600px] mt-4 mx-auto">
          Travel makes you realize that no matter how much you know, there’s
          always more to learn.
        </p>
      </div>
    </section>
  );
}
