import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1705674151785-e50a1ec79cd8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBHcmVhdCUyMFdhdmUlMjBvZmZ8ZW58MHwwfHx8MTc2MjM0MjMyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'The Great Wave off Kanagawa by Hokusai',
  },
  {
    src: 'https://images.unsplash.com/photo-1705674151785-e50a1ec79cd8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBHcmVhdCUyMFdhdmUlMjBvZmZ8ZW58MHwwfHx8MTc2MjM0MjMyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Red Fuji by Hokusai',
  },
  {
    src: 'https://images.unsplash.com/photo-1585758932243-e79d46905bbb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWQlMjBGdWppJTIwYnklMjBIb2t1c2FpfGVufDB8MHx8fDE3NjIzNDIzMjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Takiyasha the Witch and the Skeleton Spectre by Kuniyoshi',
  },
  {
    src: 'https://images.unsplash.com/photo-1635517575259-e11ce6ea04ce?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWtpeWFzaGElMjB0aGUlMjBXaXRjaCUyMGFuZHxlbnwwfDB8fHwxNzYyMzQyMzI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Kuniyoshi warrior and giant salamander',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Japanese Aesthetics
          <span className="block text-white/60 text-base font-normal mt-3">Atmospheric works that inspired a generation of movement and design.</span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs text-white/80 bg-gradient-to-t from-black/60 to-transparent">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
