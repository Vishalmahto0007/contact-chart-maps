import React from "react";


interface contactInfo {
    id: number,
    img: string,
    firstName: string,
    lastName: string,
    status: string,
}

interface ViewPopUpProps {
    contactInfo: contactInfo,
    setShowPopUp: (el: boolean) => void,
}

function ViewPopUp(props: ViewPopUpProps) {
    const { contactInfo, setShowPopUp } = props;

    return (
        <div className="fixed inset-0 flex items-center justify-center ">
            <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
                <div className="flex justify-end">
                    <button className="p-2" onClick={() => setShowPopUp(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <div className="w-full mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg ">
                        <div className="flex items-center justify-between">
                        </div>
                        <div className="mt-6 w-fit mx-auto ">
                            <img src={contactInfo.img} className="rounded-full w-28 " alt="profelle picture" />
                        </div>

                        <div className="mt-8 ">
                            <h2 className="text-white font-bold text-2xl tracking-wide">{contactInfo.firstName} <br /> {contactInfo.lastName}</h2>
                        </div>
                        <p className={`${contactInfo.status === "Active" ? "text-emerald-400" : "text-blue-400"} font-semibold mt-2.5`} >
                            {contactInfo.status}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ViewPopUp;