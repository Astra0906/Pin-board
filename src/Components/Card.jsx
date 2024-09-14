import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { FaDownload } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data ,refe}) => {
    return (
        <motion.div drag dragConstraints={refe} className='relative bg-zinc-800/90 w-60 h-72 rounded-[35px] py-10 px-7 gap-5 text-white overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight font-mono font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex justify-between py-3 font-mono px-8 items-center'>
                    <h4>{data.filesize}</h4>
                    <div className='bg-zinc-900 rounded-[50%] p-2'>
                        {data.close ? <IoCloseCircleOutline /> : <FaDownload size=".7em" />}
                        
                    </div>

                </div>
                {data.tag.isopen && (<div className='bg-blue-400 w-full py-3 px-4 flex items-center justify-center'><h3>{data.tag.tagTitle}</h3></div>)}
                
            </div>

        </motion.div>
    )
}

export default Card