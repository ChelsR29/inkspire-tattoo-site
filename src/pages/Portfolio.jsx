import React, { useEffect, useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AOS from "aos";
import "aos/dist/aos.css";

const portfolioImages = [
  {
    src: "/images/tat1.jpg",
    title: "Feather Finger Tattoo",
    description:
      "Elegant feather and linework over the fingers, blending symbolism and style in a compact design.",
  },
  {
    src: "/images/tat2.jpg",
    title: "Back Mandala Wings",
    description:
      "Intricate ornamental design across the shoulders and spine — symmetrical, bold, and graceful.",
  },
  {
    src: "/images/tat3.jpg",
    title: "Floral Forearm Wrap",
    description:
      "Fine-line botanical pattern with celestial symbols, flowing naturally with the arm's structure.",
  },
  {
    src: "/images/tat4.jpg",
    title: "Ornamental Spine Jewel",
    description:
      "A vertical ornamental tattoo inspired by filigree and jewelry design — feminine and refined.",
  },
  {
    src: "/images/tat5.jpg",
    title: "Floral Flow Backpiece",
    description:
      "Flowing hair-like composition surrounded by florals and abstract elements — soft and surreal.",
  },
  {
    src: "/images/tat6.jpeg",
    title: "Tribal Phoenix Chest Piece",
    description:
      "Bold, symmetrical tribal pattern forming a phoenix across the chest — strength, fire, and rebirth.",
  },
];

const Portfolio = () => {
  const bottomRef = useRef(null);
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 100 });

    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollCue(!entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => {
      if (bottomRef.current) observer.unobserve(bottomRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      {/* Background texture */}
      <div className="pointer-events-none fixed inset-0 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:3px_3px] opacity-20" />

      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 tracking-tight text-zinc-50">
            Rae Vega's Portfolio
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-zinc-400">
            A curated collection of tattoos — from delicate florals to bold ornamental pieces. Each design embodies balance, intention, and timeless artistry, created in collaboration at Inkspire Studio.
          </p>
        </div>

        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioImages.map((item, i) => (
              <React.Fragment key={i}>
                <div
                  className="rounded-xl overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:bg-zinc-900/80 transition group"
                  data-aos="fade-up"
                >
                  <PhotoView src={item.src}>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-80 object-cover cursor-zoom-in group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </PhotoView>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-zinc-50 mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Scroll cue after the 3rd image */}
                {i === 2 && (
                  <>
                    {showScrollCue && (
                      <div className="col-span-full flex justify-center">
                        <div className="animate-bounce text-zinc-500 text-center">
                          <svg
                            className="w-6 h-6 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                          <p className="text-sm mt-1">Scroll to see more</p>
                        </div>
                      </div>
                    )}
                    <div ref={bottomRef} className="h-1 col-span-full" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Portfolio;


