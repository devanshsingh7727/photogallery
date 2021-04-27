import { motion } from 'framer-motion';
import React from 'react'
import UsefireStore from '../hooks/usefireStore';
import { projectFirestore } from './Firebase';
function ImageGrid({setimg}) {
const {docs}=UsefireStore('image')
const handel=(id)=>{
    projectFirestore.collection('image').doc(id).delete()
}

    return (
        <motion.div className='img-grid'>
            {docs?.map(res=>(
                <div>
                <div className='img-wrap' key={res.id}
                whileHover={{opacity:1}}
                layout
                onClick={()=>setimg(res.url)}>

                    <motion.img src={res.url} alt='sf'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}/>
                    </div>
                    <button className='button' onClick={()=>handel(res.id)}>delete</button>
                    </div>
            ))}
            
        </motion.div>
    )
}

export default ImageGrid
