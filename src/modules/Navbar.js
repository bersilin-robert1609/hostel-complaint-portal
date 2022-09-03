import React from "react"

export default function Navbar(props) {
    const options = ['Home', 'Complaint Portal', 'Complaints', 'Logout']
    const navlist = options.map((option,indeX) => {
        if(props.page === option)
            {console.log("Hey"); return <button className="selected-button">{option}</button>}
        else 
            return <button className="unselected-button">{option}</button>
    })
    return (
        <nav>
            <div className="nav--logo">
                <h1>Bakha</h1>
            </div>
            <div className="nav--list">
                {navlist}
            </div>
        </nav>
    )
}