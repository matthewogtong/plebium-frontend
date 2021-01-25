import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
function MainHeader() {
    return (
      <div className="main-header">
        <Jumbotron>
          <h1 className="main-header-title">Plebium</h1><h2>Welcome Back</h2>
          
        <Button className="main-header-write" variant="success">Write</Button>
        </Jumbotron>
      </div>
    );
        
}

export default MainHeader;