import Image from "next/image"



const MemberCard = ({ image }) => {
    return (
        <div className='font-work-sans sm:col-span-2 col-span-4 lg:col-span-1 transform hover:scale-105 hover:cursor-pointer transition-all ease duration-300 shadow shadow-lg'>
            <div className='bg-[#393E46] rounded-md overflow-hidden flex flex-col justify-center '>
                <div>
                    <Image
                        src={image}
                        width={500}
                        height={500}
                        quality={1}
                        placeholder="blur"
                        blurDataURL='/thapa.jpg'
                        alt="This is good"
                    />

                </div>
                <div className='mt-2 p-2 text-left mb-2'>
                    <h3 className='font-semibold '>Thapa Technical</h3>
                    <h4 className='text-xs text-slate-300'>Frontend Developer</h4>
                    <p className='text-[10px] text-slate-400 '>React & TypeScript</p>
                </div>
            </div>
        </div>
    )
}

export default MemberCard

// fill property

// const MemberCard = ({ image }) => {
//     return (
//         <div className='sm:col-span-2 col-span-4 lg:col-span-1 transform hover:scale-105 hover:cursor-pointer transition-all ease duration-300 shadow shadow-lg'>
//             <div className='bg-[#393E46] w-full h-30 relative rounded-md overflow-hidden flex flex-col justify-center '>
//                 <div className="">
//                     <Image
//                         src={thapa}
//                         fill={true}
//                         // quality={1}
//                         placeholder="blur"
//                         // blurDataURL={thapa.blurDataURL || thapa.src}
//                         alt="This is good"
//                         className="object-cover"
//                     />

//                 </div>

//             </div>
//         </div>
//     )
// }
