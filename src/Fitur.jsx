const Fitur = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Mengapa BrandKu?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      
        <article className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-2">Mudah Digunakan</h3>
          <p className="text-gray-500 text-sm">Tidak perlu keahlian teknis. Setup dalam 5 menit.</p>
        </article>

        <article className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-2">Serba Otomatis</h3>
          <p className="text-gray-500 text-sm">Otomatiskan tugas berulang dan fokus pada hal yang penting.</p>
        </article>

        <article className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-2">Laporan Real-time</h3>
          <p className="text-gray-500 text-sm">Pantau performa bisnismu kapan saja dan di mana saja.</p>
        </article>

      </div>
    </section>
  );
};

export default Fitur;