import React from 'react'

function Header(props) {
    return (
        <div>
            <h1>
                NASA's Photo of the Day
            </h1>
            <h2>
                {props.title}
            </h2>
        </div>
    )
}

export default Header
