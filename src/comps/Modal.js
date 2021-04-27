import { motion } from 'framer-motion'
import React from 'react'

function Modal({img,setimg}) {
    const handel=(e)=>{
        if(e.target.classList.contains('backdrop')){
        setimg(null)
        }

    }
    return (
        <motion.div className='backdrop'
        initial={{opacity:0}}
        animate={{opacity:1}}
        onClick={handel}>
            <motion.img src={img} alt='enlarged pic' initial={{y:'-100vh'}} animate={{y:0}}/>
            
        </motion.div>
    )
}

export default Modal
