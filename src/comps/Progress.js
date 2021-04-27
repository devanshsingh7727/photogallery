import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

function Progress({file,setfile}) {
    const {url,progress}=useStorage(file)
    useEffect(()=>{
        {url && setfile(null)}

    },[url,setfile])
    return (
        <motion.div className='progress-bar' animate={{width:progress+'%'}} initial={{width:0}}>
         </motion.div>
    )
}

export default Progress
