export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Ninja-ryū • Crafted with reverence for Japanese art and motion.</p>
        <div className="flex items-center gap-3">
          <a href="#home" className="hover:text-white">Back to top</a>
          <span className="opacity-30">•</span>
          <span className="text-white/50">忍 • 静 • 影</span>
        </div>
      </div>
    </footer>
  );
}
