import React, { useEffect, useState } from 'react'
import { projectFirestore } from '../comps/Firebase'

function UsefireStore(collection) {
    const [docs,setdocs]=useState([])
    useEffect(()=>{
       const unsub= projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snapshot)=>{
            setdocs(snapshot.docs.map(res=>({...res.data(),id:res.id})))
        })
        return()=>unsub();
    },[collection])
    return {docs}
}

export default UsefireStore
