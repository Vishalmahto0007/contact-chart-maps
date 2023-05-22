import React from "react";
import { Link, useLocation } from "react-router-dom";


function Sidebar() {
    const location = useLocation(); //Get Current location of page.

    return (
        <div className="hidden bg-[#273143] w-[150px] pt-16 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block h-screen">
            <div className=" text-3xl">
                <Link to="/" className={`block py-8 px-4 text-white ${location.pathname === "/" && "bg-gray-600"}
                 hover:text-white`}>Contact</Link>
                <Link to="/chart-and-maps" className={`block py-4 px-4 text-white ${location.pathname === "/chart-and-maps" && "bg-gray-600"} hover:text-white`}>Charts and Maps</Link>
            </div>
        </div>
    )
}

export default Sidebar;