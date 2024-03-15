import { NavLink } from "react-router-dom"

export const NavBars = () => {
    return (
        <>
            <nav className="bg-slate-50">
                <div className="">
                    <NavLink to={'/add_diploma'} >Icono agregar</NavLink>
                    <NavLink ></NavLink>
                </div>
            </nav>
        </>
    )
}