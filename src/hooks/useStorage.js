import {useState,useEffect} from 'react'
import {projectStorage,projectFirestore,timestamp} from '../comps/Firebase'

const useStorage=(file)=>{
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)

    useEffect(()=>{
        const storageref=projectStorage.ref(file.name)
        const collectionref=projectFirestore.collection('image')

        storageref.put(file).on('state_changed',(snap)=>{
            let percentage=(snap.bytesTransferred/snap.totalBytes)*100;
            setprogress(percentage)
        },(err)=>{
            seterror(err)
        },async ()=>{
            const url=await storageref.getDownloadURL();
            const createdAt=timestamp()
            collectionref.add({url,createdAt})
            seturl(url)
        })


    },[file])
    return{progress,error,url}
}
export default useStorage;