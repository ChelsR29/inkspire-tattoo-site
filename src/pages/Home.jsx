import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Home (Tattoo Studio aesthetic)
 * - Minimal, modern, editorial vibe
 * - Dark theme with generous whitespace
 * - Hero with portrait + clear CTAs
 * - Tight, high‑impact gallery (no clutter)
 *
 * Tailwind notes:
 * - Uses container widths via max-w-* and responsive paddings
 * - Pair with a classy display font for headings in your global CSS (e.g., "Fraunces", "Cormorant Garamond")
 */


const Home = () => {
  const images = [
    { src: "/images/tat1.jpg", w: "col-span-2", h: "h-64 md:h-72" },
    { src: "/images/tat2.jpg", w: "col-span-1", h: "h-64 md:h-72" },
    { src: "/images/tat3.jpg", w: "col-span-1", h: "h-64 md:h-72" },
    { src: "/images/tat4.jpg", w: "col-span-2", h: "h-64 md:h-72" },
  ];

  const Tag = ({ children }) => (
    <span className="rounded-full border border-zinc-700/60 px-3 py-1 text-xs tracking-wide uppercase text-zinc-300">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Ink grain / texture layer */}
      <div className="pointer-events-none fixed inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:3px_3px] opacity-20" />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <div className="grid items-center gap-10 md:grid-cols-12">
            {/* Copy */}
            <div className="md:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl leading-[1.05] font-serif text-zinc-50 tracking-tight"
              >
                Rae Vega
                <span className="block text-zinc-400 text-xl md:text-2xl font-normal mt-4">
                  Fine‑line • Floral • Ornamental
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 max-w-xl text-zinc-400/95 leading-relaxed"
              >
                Private, by‑appointment studio in Jersey City. Thoughtful, collaborative tattooing that flows with your body and stands the test of time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Tag>single‑needle</Tag>
                <Tag>black & grey</Tag>
                <Tag>delicate detail</Tag>
                <Tag>custom design</Tag>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  to="/booking"
                  className="inline-flex items-center rounded-full bg-zinc-100 px-5 py-2.5 text-zinc-900 font-medium hover:bg-white transition"
                >
                  Book an Appointment
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-zinc-200 hover:bg-zinc-900/50 transition"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>

            {/* Portrait */}
            <div className="md:col-span-5 md:justify-self-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto w-56 sm:w-64 md:w-72 aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl"
              >
                <img
                  src="/images/rae-profile.jpg"
                  alt="Rae Vega portrait"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                <div className="absolute -inset-6 -z-10 blur-3xl bg-zinc-700/20 rounded-[2.5rem]" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* subtle divider */}
        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-serif tracking-tight text-zinc-50">Featured Work</h2>
          <Link to="/portfolio" className="text-sm text-zinc-400 hover:text-zinc-200">See all →</Link>
        </div>

        {/* Asymmetric grid for editorial feel */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`${img.w} overflow-hidden rounded-xl bg-zinc-900/60 ${img.h}`}
            >
              <img
                src={img.src}
                alt={`Tattoo ${i + 1}`}
                className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Studio line */}
        <div className="mt-12 grid items-center gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <h3 className="text-xl md:text-2xl font-serif text-zinc-50 tracking-tight">
              Inkspire Studio
            </h3>
            <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
              A calm, appointment‑only space focused on comfort, safety, and collaboration. Every piece begins with a conversation and ends with aftercare that helps your tattoo heal beautifully.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <Link
              to="/booking"
              className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-zinc-200 hover:bg-zinc-900/50 transition"
            >
              Make an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
