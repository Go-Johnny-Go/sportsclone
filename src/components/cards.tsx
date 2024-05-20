import cardList  from '../data'
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


function Cards (){

    return(
     <div className="wrapper mx-auto  pb-20 pt-5 ">
       <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
       {cardList.map(card =>( 
    <div className='text-white shadow-lg rounded-lg bg-slate-800/50 '>
             <img src= {card.img} alt="" className=' opacity-50  hover:opacity-100'/>
             <div className='p-5 grid gap-6'>
                <h3 className='text-2xl italic font-bold  h-14 my-4'>{card.title}</h3>
                <div className='flex gap-4 '>
                    {/* Month and Day*/}
                    <div className='flex flex-col justify-center bg-red-700 p-2'>
                      <span className='text-4xl font-bold  italic'>{card.day}</span>
                      <span className='mx-2 font-semibold'>{card.month}</span>
                    </div>
                    {/* Ubication and  Time*/}
                    <div className=''>
                        <div className='flex  items-center gap-2'>
                            <span><IoMdTime /></span>
                            <span>{card.hour}</span>
                        </div>
                        <div className='flex  items-center gap-2'>
                            <span><IoLocationOutline /></span>
                            <span>{card.place}</span>
                        </div>
                        <a href="" className='font-bold text-red-500'>Google Maps</a>
                    </div>
                    {/* Description*/}
                </div>
                <p className='text-lg font-normal'>{card.text}</p>
             </div>
            </div>
        ))}
       </div>
     </div>
      
    )
}
export default Cards