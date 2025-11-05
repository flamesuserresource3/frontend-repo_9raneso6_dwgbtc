import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#techniques', label: 'Techniques' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'Origins' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">忍</span>
              <span className="text-sm tracking-widest uppercase text-white/80">Ninja-ryū</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
