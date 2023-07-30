'use client'
import Slider from "react-slick";
import { ItemCarousel } from "./itemCarousel"
import { settingsSlider } from "@/helpers/slider/settingsSlider";


export const GroupCarousel = ({animes}) => {
  
  return (
    <div className="container w-full max-w-full flex flex-row contaner overflow-hidden">
        <Slider {...settingsSlider} >
            {animes.result.data.map(( item )=><ItemCarousel key={item.id} item={item}/>)}
        </Slider>
    </div>
  )
}
