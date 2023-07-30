import { conectionsAnime } from "@/conections/anime";
import { conectionsDetailsAnime } from "@/conections/detailsAnime";
import { createContext, useEffect, useState } from "react";

export const ContextApp = createContext();
export const ContextAppProvider = ({children}) => {
    const [animes, setAnimes] = useState(null)


    const searchAnime =  (textSearch = "") =>{
        conectionsAnime(textSearch).then(response =>{
            setAnimes({...response})
        })
    }
    



    useEffect(() => {
        searchAnime("")
    }, [])
    
    return (
        <ContextApp.Provider value={{searchAnime, animes}}>
            {children}
        </ContextApp.Provider>
    )
}

