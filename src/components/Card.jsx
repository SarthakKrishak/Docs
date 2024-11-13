import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference }) => {

    return (
        <div>
            <motion.div drag dragConstraints={reference } whileDrag={{scale:1.2}} className='flex-shrink-0 relative rounded-[40px] w-60 h-72 bg-zinc-900 text-white px-5 py-10 overflow-hidden'>
                <FaRegFileAlt/>
                <p className='font-sans text-sm leading-tight mt-5'>{data.desc}</p>
                <div className="footer absolute bottom-0 w-full left-0 text-white">
                    <div className='flex justify-between items-center px-6 py-4'>
                        <h5 className='font-sans text-sm'>{data.fileSize}</h5>
                        <span className='bg-zinc-700 rounded-full p-2'>
                            {data.close ? <IoCloseSharp /> : <MdOutlineFileDownload />}
                        </span>
                    </div>
                    {data.tag.isOpen ? (<div className={`tag ${data.tag.tagColor == "blue"?"bg-blue-600":"bg-green-600"} w-full py-4 flex justify-center items-center`}>
                        <h3 className='text-sm font-sans font-semibold'>{data.tag.tagTitle}</h3>
                    </div>):null}
                    
                </div>
            </motion.div>
        </div>
    )
}

export default Card