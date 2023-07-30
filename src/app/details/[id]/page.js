'use client'
import { ContentPage } from '@/components/details/contentPage/contentPage'
import { LoadingDetails } from '@/components/details/loading/loadingDetails'
import { conectionsDetailsAnime } from '@/conections/detailsAnime'

import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'


export default function DetailsAnime({params}) {
    const [data, setData] = useState(null)
    //si no se envia parametro
    const id = params?.id
    if(id === undefined || id === null || isNaN(parseInt(id))){
        redirect('/')
    }
    
    const funcDetails = () =>{
        conectionsDetailsAnime(id).then((response)=>{
            if(response.ok){
                setData({...response})
            }
            else{
                funcDetails()
            }
        })
    }
    useEffect(()=>{
        funcDetails()
    },[])
    
    

    return(
        <div className="container fluid auto flex justify-flex-start content-center items-center min-h-screen max-w-none flex-col">
            <div className="container fluid w-full flex flex-col items-start basis-full">
                {
                    data?.result !== undefined && data?.result?.length !== 0
                    ?
                        <ContentPage data={data.result}/>
                    :
                        <LoadingDetails />
                }
            </div>
        </div>
        
    )

}