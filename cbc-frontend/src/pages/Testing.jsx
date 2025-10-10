import { useState } from "react"
import toast from "react-hot-toast"
import { MediaUpload } from "../../utils/mediaUpload"

export function Testing() {

    const [file,setFile] = useState(null)
     
    function handleUpload() {
        MediaUpload(file).then((url)=>{
            console.log(url)
            toast.success("File uploaded successfully")
        }).catch((err)=>{
            console.log(err)
            toast.error("Error uploading file")
        })
    }
    return(
        <div className="bg-blue-200 w-full h-screen flex flex-col justify-center items-center">
            <input type="file" onChange={
                (e) => {
                    setFile(e.target.files[0])
                }} />
            <button onClick={handleUpload} className="bg-green-500 text-white rounded hover:bg-green-700 p-3 m-2">Upload</button>
       
        </div>
    )
}