import React from 'react'
import './About.css'
import AboutImg from '../../assets/food4.jpg'
import PlayIcon from '../../assets/playIcon.png'


const About =({setPlayVideo})=> {
  return (
    <div className='about' name="about">
        <div className='about-left'>
            <img src={AboutImg} alt='about-img' className='about-img'/>
            <img src={PlayIcon} alt='play-icon' className='play-icon' onClick={()=>{setPlayVideo(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT FOOD PRESERVATION (FP)</h3>
            <h2>Preserving The Food For Tomorrows Drought</h2>
            <p>FP Food Preservation is a mission-driven organization committed to alleviating food insecurity across Africa, particularly in regions severely impacted by drought. Understanding that food is not just a basic need but a vital source of hope and stability, our work focuses on ensuring that every community has access to nutritious and sustainable food sources, even in the most challenging times.</p>
            <p>At FP Food Preservation, we believe that no one should have to face the fear of hunger. By combining innovation, education, and community engagement, we strive to create a future where every person has access to the food they need to live a healthy and fulfilling life. Together, we can make a lasting impact on the fight against food insecurity in Africa.</p>
            <p>In addition to our preservation efforts, FP Food Preservation is committed to educating communities about sustainable food practices. We provide training on how to store and manage food supplies effectively, ensuring that families can make the most out of their resources. Our goal is to empower communities with the knowledge and tools needed to achieve long-term food security, thereby building resilience against future challenges.</p>
        </div>
    </div>
  )
}

export default About
