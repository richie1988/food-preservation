import React from 'react';
import './Program.css';
import food1 from '../../assets/food10.jpg'
import food2 from '../../assets/food11.jpg'
import food3 from '../../assets/food12.jpg'
import foodIcon1 from '../../assets/educationIcon.png'
import foodIcon2 from '../../assets/foodicon2.png'
import foodIcon3 from '../../assets/foodicon3.png'


const Program =()=> {
    return (
        <div className="programs" name="programs">
            <div className="program">
                <img src={food1} alt='food1'/>
                <div className="caption">
                    <img src={foodIcon3} alt="foodIcon"/>
                    <p>Help The Children in Need</p>
                    </div>
            </div>
            <div className="program">
                <img src={food2} alt='food2'/>
                <div className="caption">
                    <img src={foodIcon2} alt="foodIcon"/>
                    <p>Preserve Food</p>
                    </div>
            </div>
            <div className="program">
                <img src={food3} alt='food3'/>
                <div className="caption">
                    <img src={foodIcon1} alt="foodIcon"/>
                    <p>Educate The Future Generation</p>
                    </div>
            </div>
        </div>
    )
}

export default Program