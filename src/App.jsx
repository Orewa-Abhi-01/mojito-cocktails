import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mocktails from "./components/Mocktails.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className="min-h-screen"  >
            <Navbar />
            <Hero/>
            <Mocktails />
        </div>
    )
}
export default App
