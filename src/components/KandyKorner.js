import React from "react";
import '../App.css';
import { ApplicationViews } from './ApplicationViews';
import { NavBar } from './nav/NavBar'
import './KandyKorner.css'

const KandyKorner = () => {
    return (
        <>
            <NavBar />
            <ApplicationViews />
        </>

    )
}
export default KandyKorner