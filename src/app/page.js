
import { Carousel } from "@/components/carousel/carousel";
import { FormSearch } from "@/components/search/formSearch";

export default function Home() {

  return (
    
      <div className="container fluid auto flex justify-flex-start content-center items-center min-h-screen pt-10 max-w-none flex-col px-5">
        <div className="container max-w-lg flex-col items-start">
          <h1 className="text-5xl md:text-7xl font-[700] text-center mb-4">Anime <span className="text-[#D832F7]">App</span></h1>
          <FormSearch />
        </div>
        <Carousel />
      </div>
  )
}
