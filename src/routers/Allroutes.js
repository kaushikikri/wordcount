import { Routes, Route } from "react-router-dom";
import { Home, Jokepage, Pagenotfound } from "../pages";

export const Allroutes = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="joke" element={<Jokepage />} />
            <Route path="*" element={<Pagenotfound />} />
        </Routes>
    )
}
