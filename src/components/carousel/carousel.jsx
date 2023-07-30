'use client'
import { ContextApp } from "@/context/context"
import { useContext, useEffect, useState } from "react"
import { GroupLoading } from "./loading/groupLoading"
import { GroupCarousel } from "./item/groupCarousel"

export const Carousel = () => {
    const { animes} = useContext(ContextApp)


    if(animes?.result?.total === 0){
        return (
            <p>Sorry, we couldn`t find the anime you`re looking for. I try another</p>
        )
    }
    

    console.log()
    // aca se hace el mapeo y loading
    return (
        <div className="container fluid max-w-7xl">
            {
                animes !== null &&  animes.result.length != 0
                ?   
                    //mapeo de elementos
                    <GroupCarousel animes={animes}/>
                :
                    //loading
                    <GroupLoading />
            }
        </div>
    )
}
