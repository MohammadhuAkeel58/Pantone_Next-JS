import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50  mt-4 w-full bg-white px-20 shadow-md">
      <nav className="flex items-center justify-between p-4">
        <div className="ml-10 font-patriot">PANTONE</div>
        <ul className="flex items-center space-x-8 font-oxygen font-bold">
          <li>
            <Link href="/">
              <li className="hover:underline">Home</li>
            </Link>
          </li>
          <li>
            <Link href="/collections">
              <li className="hover:underline">Collections</li>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <li className="hover:underline">Shop</li>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <li className="hover:underline">About Us</li>
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <img src="/Frame 17.svg" alt="Search Icon" className="size-15" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
