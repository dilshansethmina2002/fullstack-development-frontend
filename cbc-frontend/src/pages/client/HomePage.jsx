import { Route, Routes } from "react-router-dom"
import { Header } from "../../components/Header"
import { ProductPage } from "./ProductPage"
import { ProductOverview } from "./ProuctOverview"

export function HomePage(){

    return(
        <div className="w-full h-screen ">
            <Header/>
            
            <div className="flex flex-col items-center justify-center h-[calc(100vh-75px)] min-h-[calc(100vh-75px)] gap-6 ">
                <Routes path="*">
                    <Route path="/*" element={<h1>HomePage Content</h1>} />
                    <Route path="/product" element={<ProductPage/> }/>
                    <Route path="/contact" element={<h1>Contact Page Content</h1>} />
                    <Route path="/overview/:id" element={<ProductOverview/>}/>
                </Routes>
                
            </div>
        </div>
    )
}