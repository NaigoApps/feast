import React from 'react';
import './App.css';
import {FeastsComponent} from "./components/FeastsComponent";
import {Route, Routes} from "react-router-dom";
import {OrdinationsComponent} from "./components/OrdinationsComponent";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<FeastsComponent/>}></Route>
                <Route path=":feastId" element={<OrdinationsComponent/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
