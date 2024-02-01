import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login";
import Estoque from "../Pages/Estoque";
import Encomendas from "../Pages/Encomendas";

function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path="*" element={<div>Not Found</div>}></Route>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/Estoque" element={<Estoque></Estoque>}></Route>
                <Route path="/Encomendas" element={<Encomendas></Encomendas>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas