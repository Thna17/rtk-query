import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Contact } from '../models/contact.model';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3006/'
    }),
    endpoints: (builder) => ({
        contacts: builder.query<Contact[], void>({
            query:() => '/contacts'
        })
    })
})

export const { useContactsQuery } = contactApi;