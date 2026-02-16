import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Laptops from "./Laptops.jsx";
import Mobiles from "./Mobiles.jsx";
import Watches from "../../Watches.jsx";
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to="/laptops" style={{marginRight:200}}>
                    Laptops
                </Link>
                <Routes>
                    <Route path="/laptops" element={<Laptops></Laptops>}></Route>
                </Routes>

                <Link to="/mobiles" style={{marginRight:200}}>
                    Mobiles
                </Link>
                <Routes>
                    <Route path="/mobiles" element={<Mobiles></Mobiles>}></Route>
                </Routes>

                <Link to="/watches" style={{marginRight:200}}>
                    Watches
                </Link>
                <Routes>
                    <Route path="/watches" element={<Watches></Watches>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;