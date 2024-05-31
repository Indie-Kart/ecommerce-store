import React from 'react';
import Link from "next/link";
 const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-auto py-10">
      <div className="footer-links  flex flex-row justify-between items-center  
              px-10 sm:px-6 lg:px-20">
          <Link href="/">Home</Link>
          <Link href="/About_us">About Us</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Blog">Blogs</Link>
          <Link href="/Blog">FAQs</Link>
         
       
        </div><br></br>
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
