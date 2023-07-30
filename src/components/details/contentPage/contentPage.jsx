'use client'
import Image from "next/image"

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const ContentPage = ({data}) => {
    
    return (
        <div className="container w-full max-w-full flex flex-col md:flex-row px-5 py-10">
            <div className="flex items-start flex-col md:flex-row">
                    <Link href="/" className={`d-none appearance-none w-auto px-6 py-2 text-base bg-[#0072f5] text-white rounded-3xl font-normal mr-0 md:mr-10 flex md:hidden justify-center items-center my-2 md:my-0`}>
                        <FontAwesomeIcon icon={faAngleLeft} className="mr-1"/>
                        Atras
                    </Link>
                </div>
            <div className="flex basis-full md:basis-1/3  flex-col justify-start items-center">
                <Image src={data.images?.jpg?.image_url} width={300} height={600} alt={data.title} className="rounded-lg" style={{width:"100%"}}/>
                <p className="text-center bg-[rgba(255,255,255,0.1)] p-2 px-5 rounded-full mt-5 text-sm" style={{backdropFilter:'saturate(180%) blur(14px)'}}>Score: {data.score} | Rank: {data.rank} | Popularity: {data.popularity}</p>
            </div>
            <div className="flex basis-full flex-col px-5">
                <div className="flex items-center md:items-start flex-col md:flex-row">
                    <Link href="/" className={`d-none appearance-none w-auto px-6 py-2 text-base bg-[#0072f5] text-white rounded-3xl font-normal mr-0 md:mr-10 hidden md:flex justify-center items-center my-2 md:my-0`}>
                        <FontAwesomeIcon icon={faAngleLeft} className="mr-1"/>
                        Atras
                    </Link>
                    <h1 className="text-2xl md:text-5xl">{data.title}</h1>
                </div>
                <h3 className="text-lg border-b-2 pb-2 mt-5">Synopsis</h3>
                <p className="mt-5 font-light">{data.synopsis}</p>
                {data.background
                ? 
                <>
                    <h3 className="text-lg border-b-2 pb-2 mt-5">Background</h3>
                    <p className="mt-5 font-light">{data.background}</p>
                </>
                :
                <></>
                }
                {data.trailer.embed_url
                ? 
                <>
                    <h3 className="text-lg border-b-2 pb-2 mt-5">Trailer</h3>
                    <iframe width="100%" src={data.trailer.embed_url} className="aspect-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </>
                :
                <></>
                }

                


            </div>
        </div>
    )
}
