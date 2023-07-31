import Image from 'next/image'
import Link from 'next/link'

import { Score } from './score/score'


export const ItemCarousel = ({item, element}) => {
    return (
        <div className={`${element ? '' : 'basis-full'} col  max-w-[100%]  shrink-0 p-2 `}>
          <Link href={'/details/'+item.id} alt={"Details "+item.title}>
            <div className="rounded-[20px] bg-[#16181a] shadow overflow-hidden ">
              <div className=" flex flex-col">
                  <div className="bg-[#353535] h-[300px] w-full relative">
                    <Score score={item.score}/>
                    <Image src={item.image?.jpg} width={500} height={300} alt={item.title} style={{height: '300px', objectFit:'cover', width:'100%'}}/>
                  </div>
                  <div className=" w-auto my-5 mx-5 rounded text-sm recortar-texto">{item.title}</div>
              </div>
            </div>
          </Link>
        </div>
        
      )
}
