import React from 'react';


function TopBar({title}) {
    return(
    <div>
         <nav className="navbar navbar-dark bg-primary">
            <span className="text-center" style={{color:"white"}} >{title}</span>
        </nav>
    </div>
    )
}

export default TopBar