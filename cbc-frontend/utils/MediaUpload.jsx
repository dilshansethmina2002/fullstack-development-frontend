import { createClient } from "@supabase/supabase-js"
import toast from "react-hot-toast"

 
const supabase = createClient("https://aokrwxrryixwresovpcx.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFva3J3eHJyeWl4d3Jlc292cGN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwNjMxODUsImV4cCI6MjA3NTYzOTE4NX0.jMfbw1FLb1-K44va-_wXa_s8yFrPr3aFRzaSK6QbAcg")

export function MediaUpload(file) {
    const promise = new Promise(
        (resolve, reject) => {
            if(!file || !file.name|| file.size === 0){
                toast.error("No file selected")
                reject("No file selected")
                return

            }else{
                const timeStamp = new Date().getTime()
                const newFileName = timeStamp+"-"+file?.name
                supabase.storage.from("images").upload(newFileName, file,{
                    cacheControl: '3600',
                    upsert: false
                }).then(
                    () => {
                        const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                        resolve(url)
                    }
                ).catch(
                    (err) => {
                        reject("Error uploading file")
                        console.log(err)
                    }
                )
            }  
            
        }
    )
    return promise
}