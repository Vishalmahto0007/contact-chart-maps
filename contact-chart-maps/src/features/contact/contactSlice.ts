import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Img } from '../../components/Img'

interface ContactModel {
    id: number;
    img: string;
    firstName: string;
    lastName: string;
    status: string
}

interface State {
    contactData: ContactModel[],
}



const initialState = {
    contactData: []
} as State

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<any>) => {
            let value = {
                ...action.payload,
                id: Math.floor((Math.random() * 1000000000) + 1),
                img: Img
            }
            state.contactData.push(value);
        },
        updateContact: (state, action: PayloadAction<any>) => {
            let findIndex = state.contactData.findIndex((i) => i.id === action.payload.id)
            state.contactData[findIndex].firstName = action.payload.firstName
            state.contactData[findIndex].lastName = action.payload.lastName
            state.contactData[findIndex].status = action.payload.status
        },
        deleteContact: (state, action: PayloadAction<number>) => {
            let filteredValue = state.contactData.filter((i) => i.id !== action.payload)
            return {
                ...state,
                contactData: filteredValue
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, updateContact } = contactSlice.actions

export default contactSlice.reducer