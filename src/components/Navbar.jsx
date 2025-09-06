import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-black text-[#ebebeb] p-5 px-6 flex justify-between items-center">
    <h1 className="text-xl font-bold">Inkspire Studio</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/portfolio" className="hover:underline">Portfolio</Link>
      <Link to="/booking" className="hover:underline">Book</Link>
    </div>
  </nav>
);

export default Navbar;
