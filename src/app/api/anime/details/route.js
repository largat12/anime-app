import { NextResponse } from "next/server";

export async function GET(request){
    //capturando parametros de url 
    const { searchParams  } = new URL(request.url)
    const id    = searchParams.get("id")    === null ? false : searchParams.get("id")

    if(isNaN(parseInt(id)) || !id || id === undefined){
        return NextResponse.json({
            ok:false,
            msg:'Valor no asignado. Debe ser un numero',
            result:[]
        },{status:200})
    }
    
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const urlFetch = `https://api.jikan.moe/v4/anime/${id}`
    return await fetch(urlFetch, requestOptions)
    .then(response => response.json())
    .then((result) => {
        if(result?.status === undefined){
            return NextResponse.json({
                ok:true,
                result:result.data
            },{status:200})
        }
        return NextResponse.json({
            ok:false,
            msg:error,
            result:[]
        },{status:200})
        
    })
    .catch((error)=>{
        return NextResponse.json({
            ok:false,
            msg:error,
            result:[]
        },{status:200})
    })

    
}