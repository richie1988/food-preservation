import React from 'react'
import './Title.css'

const Title =({subtitle, title})=> {
     return (
        <div className="title">
            <h2>{subtitle}</h2>
            <h3>{title}</h3>
        </div>
     )
}

export default Title