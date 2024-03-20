import { NavLink } from "react-router-dom"

export const NavBars = () => {
    return (
        <>
            <nav className="bg-white w-100 px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="text-indigo-500 md:order-1 flex  items-center">    
                        <img src="/img/logo-cpa.png" className="h-10 w-10" alt="logo-cpa" />
                        <h1 className="ml-3">Colegio Parroquial de Andacollo </h1>
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 hover:text-indigo-400">
                                <NavLink to='/home' className="nav-link">Home</NavLink>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-300 to-blue-950 text-gray-50 rounded-xl flex items-center gap-2">
                            <NavLink to='/adddiploma' className="nav-link">Add Diploma</NavLink> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg> 
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}