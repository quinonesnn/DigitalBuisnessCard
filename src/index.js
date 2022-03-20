import React from "react"
import ReactDOM from "react-dom"
import Info from "./Components/Info"
import About from "./Components/About"
import Intrest from "./Components/Intrest"
import Footer from "./Components/Footer"
import "./Styles/App.css"


function App () {
    return(
        <div>
            <Info />
            <About />
            <Intrest />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))