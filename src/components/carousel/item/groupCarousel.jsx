'use client'
import Slider from "react-slick";
import { ItemCarousel } from "./itemCarousel"
import { settingsSlider } from "@/helpers/slider/settingsSlider";


export const GroupCarousel = ({animes}) => {
  if(animes.result.data.length < 5){
    return (
      <div className="container w-full max-w-full flex flex-row contaner overflow-hidden justify-center">
          {animes.result.data.map(( item )=><ItemCarousel key={item.id} item={item} element={true}/>)}
      </div>
    )
  }
  return (
    <div className="container w-full max-w-full flex flex-row contaner overflow-hidden">
        <Slider {...settingsSlider} >
            {animes.result.data.map(( item )=><ItemCarousel key={item.id} item={item} element={false}/>)}
        </Slider>
    </div>
  )
}
