const Hero = () => {
  return (
    <section className="bg-blue-50 text-center py-24 px-6">
      <h1 className="className-3xl font-bold text-gray-800 mb-4">Solusi Terbaik untuk Bisnismu</h1>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
      </p>
     
      <button id="cta-button" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
        Mulai Gratis
      </button>
      <p id="cta-message" className="mt-4 text-gray-400 font-medium hidden">
        button clicked!
      </p>
      <p id="second_message" className="mt-4 text-gray-400 font-medium hidden">
        repeat clicked!
      </p>
    </section>
  );
};

export default Hero;