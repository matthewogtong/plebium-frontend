import React from "react";

//thinking we can find minimal icons to use for the buttons?
function TitleHeader() {



    return (
        <div className="title-header">
            <img className="logo" alt="Plebium"></img>
            <h2 className="title-name">Plebium</h2>
            <button 
                type="button" 
                className="sign-in btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal">
                Sign In
            </button>

            <button className="get-started">Get Started</button>
        </div>
    )

}

export default TitleHeader;