"use client";
import React, { useEffect } from "react";
import "./navbar.css";
import Image from 'next/image'


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
        <div className="logo">
          <Image src="/svgpngLogo.png" width={50} height={100} alt="Logo Image" />
        </div>
        <div className="hamburger" onClick={()=>handleHumburgerClicked()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <button className="login-button" href="#">
              Login
            </button>
          </li>
          <li>
            <button className="join-button" href="#">
              Join
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
