import React from 'react'
import './Hero.css'
import Arrow from '../../assets/Arrowright.png'

const Hero =()=> {
    return (
        <div className="hero container" name="hero">
            <div className="hero-text">
                <h1>Preserve to Thrive: Secure Food for a Brighter Future</h1>
                <p>
                In times of drought and scarcity, access to preserved food can make a world of difference. At FP Food Preservation, we are committed to ensuring that communities across Africa have reliable access to food, even in the toughest of times.
                </p>
                <button className="support_btn">Support Our Mission<img src={Arrow} alt='arrow_icon'/></button>
            </div>
        </div>
    )
}

export default Hero