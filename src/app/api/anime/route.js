import { NextResponse } from "next/server";

export async function GET(request, context){
    //capturando parametros de url 
    const { searchParams  } = new URL(request.url)
    const search    = searchParams.get("search")    === null ? false : searchParams.get("search")
    const limit     = searchParams.get("limit")     === null ? 10 : searchParams.get("limit")
    
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    let query = search !== false && search !== '' ? 'q='+search+"&" : '' + limit !== false ? 'limit='+limit+"&" : ''

    

    const urlFetch = `https://api.jikan.moe/v4/anime?${query.substring(0, query.length - 1)}`
    return await fetch(urlFetch, requestOptions)
    .then(response => response.json())
    .then((result) => {
        console.log("resultado")
        const resultData = result.data.map((item, index)=>{
            return{
                id:item.mal_id,
                title:item.title,
                image:{
                    jpg:item.images.jpg.image_url,
                    webp:item.images.jpg.image_url
                },
                score:item.score,
            }
        })

        const data = {
            total:result.pagination.items.total,
            count:result.pagination.items.count,
            data:resultData
        }
        return NextResponse.json({
            ok:true,
            result:data
        },{status:200})
    })
    .catch((error)=>{
        console.log("error")
        return NextResponse.json({
            ok:false,
            msg:error,
            result:[]
        },{status:200})
    })

    
}