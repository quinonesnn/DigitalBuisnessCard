import React from "react"
import image from "../images/NickQuinones.JPG"

export default function Info (){
    return(
        <div>
            <img src={image} className="rounded mx-auto d-block image" alt="alt"/>
            <div className="container info-rectangle mx-auto">
                <h1>Nicolas Quinones</h1>
                <h3>Frontend Developer</h3>
                <p><a href="https://quinonesnn.github.io/">quinonesnn.github.io</a></p>
                <div className="d-flex gap-4 mx-auto justify-content-center">
                    <button type="button" className="btn btn-light col-5"><i class="fa-solid fa-envelope"></i> Email</button>
                    <button type="button" className="btn btn-primary col-5"><i class="fa-brands fa-linkedin"></i> Linkedin</button>
                </div>
            </div>
        </div>
    )
}