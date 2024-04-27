import { Link } from "react-router-dom";
import { useState } from "react";
import ImageHome from '../../assets/images/laptop-home.png'
// import './header.css'

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    return (
        <nav className="bg-blue-100 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={ImageHome} className="h-12" alt="image of laptop" />
                </Link>
                <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isNavbarOpen ? "true" : "false"}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isNavbarOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium text-2xl flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={{ backgroundColor: '#D1EAFB' }}>

                        <li>
                            <Link to="/about" className="block py-2 px-3 font-mono text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page" onClick={closeNavbar}>About</Link>
                        </li>
                        <li>
                            <Link to="/dataanalytic" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={closeNavbar}>Data Analytics</Link>
                        </li>
                        <li>
                            <Link to="/frontend" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={closeNavbar}>Front-End Developer</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={closeNavbar}>Contact</Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={closeNavbar}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



//     // State to manage the visibility of the menu
//     const [isOpen, setIsOpen] = useState(false);

//     // Function to toggle the menu
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     // Function to handle menu item click and close the menu
//     const handleMenuItemClick = () => {
//         setIsOpen(false);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">
//                     <img src={ImageHome} alt="rocket icon" width="80" height="60" className="d-inline-block align-text-top"/>
//                 </Link>
//                 <button className="navbar-toggler" type="button" onClick={toggleMenu}>
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
//                     <ul className="navbar-nav justify-content-end mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about" onClick={handleMenuItemClick}>About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/dataanalytic" onClick={handleMenuItemClick}>Data Analytics</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/frontend" onClick={handleMenuItemClick}>Front-end Developer</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact" onClick={handleMenuItemClick}>Contact</Link>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Resume</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }
