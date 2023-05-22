import React from "react";



function EmptyContact() {

    return (

        <div className="flex justify-center m-8">
            <div className="flex bg-white m-8 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex p-8 leading-normal">
                    <div>
                        <svg className="w-5 h-5 inline mr-2 fill-current">
                            <path fill-rule="evenodd" d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm1.414 11l3.536 3.536-1.414 1.414-3.536-3.536-3.536 3.536-1.414-1.414 3.536-3.536-3.536-3.536 1.414-1.414 3.536 3.536 3.536-3.536 1.414 1.414-3.536 3.536z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-400">
                            No Contact Found</p>
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-400">
                            Please add contact from</p>
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-400">
                            Create Contact Button</p>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default EmptyContact;