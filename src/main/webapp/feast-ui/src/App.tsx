import React from 'react';
import './App.css';
import {FeastsComponent} from "./components/FeastsComponent";
import {Route, Routes} from "react-router-dom";
import {OrdinationsComponent} from "./components/OrdinationsComponent";
import FeastsAppBar from "./components/FeastsAppBar";
import {MenuComponent} from "./components/MenuComponent";

function App() {
    return (
        <div>
            <FeastsAppBar/>
            <Routes>
                <Route path="/" element={<FeastsComponent/>}></Route>
                <Route path=":feastId" element={<OrdinationsComponent/>}></Route>
                <Route path="/menu" element={<MenuComponent/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
