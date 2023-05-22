import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreateContact from "../features/contact/createContact";
import EmptyContact from "../features/contact/emptyContact";
import ContactList from "../features/contact/contactList";
import ContactForm from "../components/ContactForm";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


function Contact() {

    const [isContactForm, setContactForm] = useState(false)
    const [isShowContactForm, setShowContactForm] = useState(false)

    const state = useSelector((state: RootState) => state.contact.contactData)

    return (
        <div>
            <Navbar />
            <div className="flex">

                <Sidebar />
                <div className="flex-1 pt-16">

                    {isContactForm ? <ContactForm handleContactForm={setContactForm} type="add" /> : !isShowContactForm && <CreateContact setContactForm={setContactForm} />
                    }

                    {(state.length > 0 && !isContactForm) &&
                        <ContactList contactData={state} isShowContactForm={isShowContactForm} handleContactForm={setShowContactForm} />
                    }

                    {(state.length === 0 && !isContactForm) && <EmptyContact />}

                </div>
            </div>
        </div >

    )
}


export default Contact;