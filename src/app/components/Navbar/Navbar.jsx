"use client";
import "./navbar.css";
import Image from 'next/image'
import Link from "next/link";


const Navbar = () => {
    function handleHumburgerClicked(){
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        console.log('the animation should be staring...');
        navLinks.classList.toggle("open");
        links.forEach((link) => {
          link.classList.toggle("fade");
        });
        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    }
 
  return (
    <div>
      <nav>
        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse logo">
                <Image src="/svgpngLogo.png" width={40} height={100} alt="Logo Image" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyCONVERTER</span>
            </Link>
        <div className="hamburger" onClick={()=>handleHumburgerClicked()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/svgtopng">SVG TO PNG</Link>
          </li>
          <li>
            <Link href="/pngtosvg">PNG TO SVG</Link>
          </li>
          <li>
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
          </li>
          {/* <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li> */}
          {/* <li>
            <button className="login-button" href="#">
              Login
            </button>
          </li>
          <li>
            <button className="join-button" href="#">
              Join
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
