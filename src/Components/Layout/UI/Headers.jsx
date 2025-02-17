import { NavLink } from "react-router-dom"

export const Headers = () =>{
    return(
    
    <header>
        <div className="container">
        <div className="grid navbar-grid">
            <div className="logo">
                <NavLink to='/'>
                <h1>Roamora</h1>
                </NavLink>
            </div>
        </div>

        </div>
    </header>
    )
}