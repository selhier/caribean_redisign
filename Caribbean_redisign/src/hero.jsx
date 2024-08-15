import React from "react";
import deadpool from "./assets/deadpool.jpeg";
const Hero = ()=>{
    const hero = deadpool;
    return(
        <section className="hero">
            <div className="hero__content" style={{backgroundImage: `url(${deadpool})`}}>
            <p>hola</p>
            </div>
        </section>
    )
}

export default Hero;