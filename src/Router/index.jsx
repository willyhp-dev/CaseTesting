import { Routes, Route } from "react-router-dom";
import MainPage from "../mainPage/case1";
import Case2Page from "../mainPage/case2";
import Case3Page from "../mainPage/case3";
export default function RouterPage() {
    
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path ="/case2" element ={<Case2Page/>}/>
            <Route path ="/case3" element={<Case3Page/>}/>
        </Routes>
            
    )
}