import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addContact, updateContact } from "../features/contact/contactSlice";


interface MyState {
    firstName: string,
    lastName: string,
    status: string
}

interface contactInfo {
    id: number,
    img: string,
    firstName: string,
    lastName: string,
    status: string,
}

interface ContactFormProps {
    handleContactForm: (el: boolean) => void,
    contactInfo?: contactInfo,
    type: string
}

const ContactForm = (props: ContactFormProps) => {
    const { handleContactForm, contactInfo, type } = props;
    const dispatch = useDispatch();

    const [state, setState] = useState<MyState>
        ({
            firstName: contactInfo ? contactInfo.firstName : "",
            lastName: contactInfo ? contactInfo.lastName : "",
            status: contactInfo ? contactInfo.status : "Active"
        });

    /* 
        This function handles the firstName change event
    */
    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            firstName: event.target.value,
        }));
    };

    /* 
        This function handles the lastName change event
    */
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            lastName: event.target.value,
        }));
    };

    /* 
        This function handles the Status change event
    */
    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            status: event.target.value,
        }));
    };

    /* 
        This function handles the form Submit with dispatch values on reducer.
    */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (type === "add") {
            dispatch(addContact(state))
            handleContactForm(false)
        } else {
            dispatch(updateContact({ ...contactInfo, firstName: state.firstName, lastName: state.lastName, status: state.status }))
            handleContactForm(false)
        }
    };

    return (
        <div className="flex justify-center">

            <div className="flex leading-normal h-full w-9/12" style={{ paddingLeft: "125px" }}>
                <form className="w-full" onSubmit={handleSubmit}>
                    <h2 className="flex justify-center text-3xl py-8">{type === "add" ? "Create" : "Edit"} Contact</h2>
                    <div className="border p-8 border-gray-200 rounded-lg shadow bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex flex-wrap w-full m-4">
                            <label htmlFor="name" className="text-2xl font-medium px-4">First Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={state.firstName}
                                onChange={handleFirstNameChange}
                                className="mt-1 h-16 w-9/12 block border-gray-300 rounded-md text-2xl focus:ring-blue-500 focus:border-blue-500"
                                required={true}

                            />
                        </div>
                        <div className="flex flex-wrap w-full m-4">
                            <label htmlFor="name" className="text-2xl font-medium px-4">Last Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={state.lastName}
                                onChange={handleLastNameChange}
                                className="mt-1 h-16 w-9/12 block border-gray-300 rounded-md text-2xl  focus:ring-blue-500 focus:border-blue-500"
                                required={true}

                            />
                        </div>

                        <div className="flex flex-wrap w-full m-4 " style={{ paddingLeft: "50px" }}>
                            <label className="text-2xl font-medium px-4">Status:</label>
                            <div className="mt-2 flex flex-col">
                                <label htmlFor="Active" className="inline-flex items-center mb-2">
                                    <input
                                        type="radio"
                                        id="Active"
                                        name="Status"
                                        value="Active"
                                        checked={state.status === 'Active'}
                                        onChange={handleStatusChange}
                                        className="form-radio h-4 w-4 text-blue-500"
                                    />
                                    <span className="ml-2 text-xl">Active</span>
                                </label>
                                <label htmlFor="Inactive" className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        id="Inactive"
                                        name="status"
                                        value="Inactive"
                                        checked={state.status === 'Inactive'}
                                        onChange={handleStatusChange}
                                        className="form-radio h-4 w-4 text-blue-500"
                                    />
                                    <span className="ml-2 text-xl">Inactive</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-4">
                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit" value="Save Contact" />
                    </div>
                </form>

            </div>
        </div>

    );
};


export default ContactForm;