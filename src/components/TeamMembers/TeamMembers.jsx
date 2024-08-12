import React, { useState } from 'react';
import './TeamMembers.css';
import NextBtn from '../../assets/Arrowright.png';
import PrevBtn from '../../assets/Arrowleft.png';
import TeamData from './TeamData';

const Testmony = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < Math.ceil(TeamData.length /2) - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className='testimonials' name="teamMembers">
            <img src={NextBtn} alt="Next" className='next-btn' onClick={nextSlide} />
            <img src={PrevBtn} alt="Previous" className='prev-btn' onClick={prevSlide} />
            <div className='slider'>
                <ul style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {TeamData.map((member, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="team-info">
                                    <img src={member.img} alt={member.name} />
                                    <div>
                                        <h3>{member.name}</h3>
                                        <span>{member.country}</span>
                                    </div>
                                </div>
                                <p>{member.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Testmony;
