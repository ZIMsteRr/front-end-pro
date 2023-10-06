import React, {createContext, useContext} from "react";
import {Waiters} from "../features/waiters";

export const LanguageContext = createContext( 'en' );

export function useLang () {
    return useContext(LanguageContext)
}

export function LanguageProvider ({children}) {
    return (
        <LanguageContext.Provider value={'en'}>
            {children}
        </LanguageContext.Provider>
    )
}