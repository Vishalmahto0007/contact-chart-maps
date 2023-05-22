import React, { useState } from "react";
import { AiFillEye, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { deleteContact } from "./contactSlice";
import ContactForm from "../../components/ContactForm";
import ViewPopUp from "../../components/ViewPopUp";




interface ContactListProps {
    handleContactForm: (el: boolean) => void,
    contactData: Array<object>,
    isShowContactForm: Boolean
}


function ContactList(props: ContactListProps) {

    const { contactData, isShowContactForm, handleContactForm } = props
    const dispatch = useDispatch();

    const [contactInfo, setContactInfo] = useState<any>({})
    const [isShowPopUp, setShowPopUp] = useState(false)

    const handleEditContact = (data: Object) => {
        handleContactForm(true)
        setContactInfo(data)
    }


    return (
        <>
            {!isShowContactForm ? <div className="flex justify-center" style={{ marginLeft: "150px" }} >
                <div className="flex flex-wrap w-full" >
                    {contactData.map((el: any, i: number) => {

                        return (
                            <div className="bg-white lg:w-1/2 py-4 px-2 sm:px-8" key={el.id}>
                                <div className="flex font-medium items-center justify-center">

                                    <div className="w-full mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg ">
                                        <div className="flex items-center justify-between">
                                        </div>
                                        <div className="mt-6 w-fit mx-auto ">
                                            <img src={el.img} className="rounded-full w-28 " alt="profelle picture" />
                                        </div>

                                        <div className="mt-8 ">
                                            <h2 className="text-white font-bold text-2xl tracking-wide">{el.firstName} <br /> {el.lastName}</h2>
                                        </div>
                                        <p className={`${el.status === "Active" ? "text-emerald-400" : "text-blue-400"} font-semibold mt-2.5`} >
                                            {el.status}
                                        </p>

                                    </div>

                                </div>
                                <div className="lg:mt-0 lg:flex-shrink-0">
                                    <div className=" mt-2 inline-flex rounded-md shadow mr-2">
                                        <button
                                            type="button"
                                            className="py-2 px-4  bg-gray-800 hover:bg-gray-700 focus:ring-gray-100 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mr-1"
                                            onClick={() => setShowPopUp(true)}
                                        >
                                            <AiFillEye size={30} />
                                        </button>
                                        <button
                                            type="button"
                                            className="py-2 px-4  bg-gray-800 hover:bg-gray-700 focus:ring-gray-100 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mr-1 "
                                            onClick={() => handleEditContact(el)}
                                        >
                                            < AiFillEdit size={30} />
                                        </button>
                                        <button
                                            type="button"
                                            className="py-2 px-4  bg-gray-800 hover:bg-gray-700 focus:ring-gray-100 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mr-1 "
                                            onClick={() => dispatch(deleteContact(el.id))}
                                        >
                                            <AiFillDelete size={30} />
                                        </button>
                                    </div>
                                </div>
                                {isShowPopUp && <ViewPopUp contactInfo={el} setShowPopUp={setShowPopUp} />}

                            </div>
                        )


                    })}


                </div>
            </div>
                :
                <div>
                    <ContactForm contactInfo={contactInfo} type="edit" handleContactForm={handleContactForm} />
                </div>
            }
        </>
    )
}


export default ContactList;