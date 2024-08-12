import React from 'react'
import './Campagn.css'
import Campagn1 from '../../assets/foo9.jpg'
import Campagn2 from '../../assets/food1.jpg'
import Campagn3 from '../../assets/food7.jpg'
import Campagn4 from '../../assets/food17.jpg'
import ArrowRight from '../../assets/Arrowright.png'

const Campagn=()=> {
    return (
        <div className='campagn' name="campagn">
            <div className='gallery'>
                <img src={Campagn1} alt='campagn-icon'/>
                <img src={Campagn2} alt='campagn-icon'/>
                <img src={Campagn3} alt='campagn-icon'/>
                <img src={Campagn4} alt='campagn-icon'/>
            </div>
            <button className="support_btn campagn-btn">See More Here <img src={ArrowRight} alt="arrow"/></button>

        </div>
    )
}

export default Campagn