// this is for the routing of the components and this will be used for proper directions to the components 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import App from "./App"

const Routing=()=>{
    return(<>
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/app" element={<App/>}/>

        </Routes>

    </Router>
    
    </>) 
}


export default Routing