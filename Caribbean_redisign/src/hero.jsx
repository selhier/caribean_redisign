import React from "react";

const Hero = ()=>{
    const hero = "https://images2.alphacoders.com/136/1363754.jpeg";
    return(
        <section className="hero">
            <img className="hero__img" src={hero} alt="" />
            <div className="hero__content">
                <h1 className="hero__content--titulo">Deadpool & Wolverine</h1>
            </div>
        </section>
    )
}

export default Hero;