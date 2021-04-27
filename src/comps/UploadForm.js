import React, { useState } from 'react'
import Progress from './Progress'

function UploadForm() {
    const [files,setfile]=useState(null)
    const [error, seterror] = useState(null)
    const types=['image/png','image/jpeg']
    const changeHandler=(e)=>{
        let selected=e.target.files[0]
        if(selected && types.includes(selected.type)){
        setfile(selected)
        seterror('')
        }
        else{
            setfile(null)
            seterror('please select an image file type')
            
        }
    }
    return (
        <div>
            <form>
                <label>
                <input onChange={changeHandler} type="file"  />
                <span>+</span>
                </label>
                <div className='output'>
                    {error && <div className='error'>{error}</div>}
                    {files && <div>{files.name}</div>}
                    {files && <Progress file={files} setfile={setfile}/> }

                </div>
            </form>
        </div>
    )
}

export default UploadForm
