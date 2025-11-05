import { motion } from 'framer-motion';

const techniques = [
  {
    title: 'Ninjutsu 忍術',
    desc: 'Core shinobi arts: evasion, deception, strategy, and survival. Flow like water and strike like lightning.',
    accent: 'from-rose-500/20 to-red-600/10',
  },
  {
    title: 'Taijutsu 体術',
    desc: 'Unarmed combat emphasizing speed, precision, and leverage. Minimal movement, maximum effect.',
    accent: 'from-emerald-500/20 to-teal-600/10',
  },
  {
    title: 'Kenjutsu 剣術',
    desc: 'Blade work rooted in centuries of discipline. Clean lines, sharp angles, controlled power.',
    accent: 'from-indigo-500/20 to-purple-600/10',
  },
  {
    title: 'Shurikenjutsu 手裏剣術',
    desc: 'Thrown blades as extensions of intent — accuracy, timing, and seamless motion.',
    accent: 'from-amber-500/20 to-orange-600/10',
  },
];

export default function Techniques() {
  return (
    <section id="techniques" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,0,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Fluid Techniques
          <span className="block text-white/60 text-base font-normal mt-3">A glimpse into the movement language of the shinobi.</span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((t, i) => (
            <TechniqueCard key={i} {...t} index={i} />)
          )}
        </div>
      </div>
    </section>
  );
}

function TechniqueCard({ title, desc, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="relative">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="inline-block rounded-full bg-white/10 p-2"
          >
            <svg width="16" height="16" viewBox="0 0 100 100" className="text-white/80">
              <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="currentColor" />
            </svg>
          </motion.span>
        </div>
        <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
        <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          <span>Breath • Balance • Timing</span>
        </div>
      </div>
    </motion.div>
  );
}
