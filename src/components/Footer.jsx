import React from "react";

const Footer = () => (
  <footer className="border-t border-zinc-800/80 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Inkspire Studio • Jersey City, NJ
      </div>
  </footer>
);

export default Footer;
