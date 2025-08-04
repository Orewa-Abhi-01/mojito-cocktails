import React from 'react'
import {navLinks} from "../constants/constants.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

import {useMediaQuery} from 'react-responsive';

const Navbar = () => {

    const isMdOrLarger = useMediaQuery({minWidth: 768}); // Tailwind's md breakpoint starts at 768px
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top"
            }
        });

        tl.fromTo('nav', {
            backgroundColor: 'transparent',
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(20px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <nav className={` ${isMobile ? "flex justify-between px-3" : "flex justify-end px-50"}`}>
            <div>
                <a href="#home" className="flex  gap-2">
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Pour Me</p>
                </a>
            </div>


            {isMdOrLarger && (
                <ul className="flex gap-4 ml-auto">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a className="nav-link" href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            )}

            {isMobile && (
                <button className="mobile-menu-button">☰</button>
            )}
        </nav>
    )
}
export default Navbar
