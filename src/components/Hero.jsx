import React from 'react'
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const Hero = () => {

    useGSAP(()=> {
        const charSplit = new SplitText('.title', {type: 'chars, words'});
        const paraSplit = new SplitText('.subtitle', {type: 'lines'});

        charSplit.chars.forEach((char)=> char.classList.add('text-gradient'));

        gsap.from(charSplit.chars, {
            yPercent: 100,
            duration: 1.2,
            ease: 'expo.out',
            stagger: 0.06,
        });

        gsap.from(paraSplit.lines, {
            opacity: 0,
            yPercent: 100,
            delay:1,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.04,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
            .to('.left-leaf', { y: -200 }, 0)
            .to('.right-leaf', { y: 300 }, 0)
        
    },[])
    return (
        <>
          <section id="hero" className="nois">
              <h2 className="title text-[#0FA4AF] text-[3.5rem] lg:text-[8.2rem] text-center mt-40 font-bold font-primary ">Pour Me</h2>

              <img src="/images/hero-left-leaf.png"
                   alt="left-leaf"
              className="left-leaf" />

              <img src="/images/hero-right-leaf.png"
                   alt="right-leaf"
              className="right-leaf" />

              <div className="body">
                  <div className="content">
                      <div className="space-y-5 hidden md:block">
                          <p>Cool. Crisp. Classic.</p>
                          <p className="subtitle">Sip the Spirit <br/>of Summer</p>
                      </div>

                      <div className="view-mocktails">
                          <p className="subtitle">Every Mocktail on our menu is a blend of premium ingredients, creative flair and timeless recipes - designed to delight your senses and served with love</p>
                          <a href="#mocktails"> View Mocktails</a>
                      </div>
                  </div>
              </div>
          </section>
        </>
    )
}
export default Hero
