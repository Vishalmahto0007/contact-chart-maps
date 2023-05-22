import React from "react";

interface CreateContactProps {
    setContactForm: (el: boolean) => void;
}
function CreateContact(props: CreateContactProps) {
    const { setContactForm } = props

    return (
        <div className="flex justify-center m-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setContactForm(true)}>
                Create Contact
            </button>
        </div>
    )
}


export default CreateContact;