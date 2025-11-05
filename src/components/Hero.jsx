import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[36rem] bg-gradient-to-t from-red-600/30 to-transparent blur-3xl" />
      </div>

      {/* Floating kanji */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-6 top-10 text-5xl text-white/30"
        >
          忍
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.25, y: [-5, 10, -5] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute right-10 bottom-24 text-6xl text-white/20"
        >
          影
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.2, x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/2 top-1/3 text-7xl text-white/10"
        >
          速
        </motion.span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-semibold leading-tight"
            >
              The Art of the Ninja
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-600">Silent. Swift. Precise.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 text-white/70 max-w-xl"
            >
              Explore the fluid techniques, discipline, and philosophy behind the legendary shinobi. From hidden movement to decisive strikes—this is a journey through grace and power inspired by classical Japanese aesthetics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#techniques" className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-lg shadow-red-900/30 hover:shadow-red-800/40 transition-shadow">
                View Techniques
              </a>
              <a href="#gallery" className="px-6 py-3 rounded-xl border border-white/15 hover:border-white/30 text-white/80">
                Japanese Art
              </a>
            </motion.div>
          </div>

          {/* Decorative circle and shuriken */}
          <div className="relative h-[420px] md:h-[520px]">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/20 to-transparent border border-red-500/20"
            />

            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'linear' }}
                className="absolute"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${15 + (i % 3) * 20}%`,
                }}
              >
                <Shuriken size={32 + i * 4} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Shuriken({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white/70 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
    >
      <path
        d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="50" cy="50" r="6" fill="#000" />
    </svg>
  );
}
