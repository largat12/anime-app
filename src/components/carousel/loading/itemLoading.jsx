
export const ItemLoading = () => {
  return (
    <div className="col basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 shrink-0 p-2">
      <div className="rounded-[20px] bg-[#16181a] shadow overflow-hidden">
        <div className="animate-pulse flex flex-col">
            <div className="bg-[#353535] h-[300px] w-full">
              <div className="h-2 w-1/3 my-5 mx-5  bg-[#16181a] rounded"></div>
            </div>
            <div className="h-2 w-auto my-5 mx-5  bg-[#353535] rounded"></div>
        </div>
      </div>
    </div>
    
  )
}
