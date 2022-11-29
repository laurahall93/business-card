import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"


export default function BusinesCard() {
    return (
        <div className="box">
                <Info />
                <About />
                <Footer />
        </div>
    )
}