import React from "react";


function Navbar() {

    return (
        <div className="fixed top-0 inset-x-0 z-50 h-16 text-white bg-[#1E5D8F] justify-between items-center shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white text-xl font-bold">Contact Page</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;