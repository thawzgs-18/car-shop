export default function Banner() {
  return (
    <section className="relative bg-red-600 py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 italic uppercase tracking-tighter">
          Sàn giao dịch ô tô <span className="text-black">số 1</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Uy tín - chất lượng - An toàn
        </p>
      </div>
      {/* Trang trí nền */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
    </section>
  );
}