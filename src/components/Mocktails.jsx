import React from 'react'
import {cocktailLists, mockTailLists} from "../constants/constants.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Mocktails = () => {

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollBehavior: "smooth",
            scrollTrigger: {
                trigger: "#mocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            }
        })

        parallaxTimeline
            .from("#c-left-leaf", {
                x: -100, y: 100
            })
            .from("#c-right-leaf", {
                x: 100, y: 100
            })
    })
    return (
        <section className=" mx-auto" id="cocktails">
            <img src="/images/hero-left-leaf.png" alt="mocktails" id="c-left-leaf"/>
            <img src="/images/cocktail-right-leaf.png" alt="mocktails" id="c-right-leaf"/>

            <div className="list ">
                <div className="popular">
                    <h2>Most Popular Mocktails: </h2>

                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} || {detail}</p>
                                </div>
                                <span> - {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved mocktails:</h2>

                    <ul>
                        {mockTailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className="me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    )
}
export default Mocktails
