import React from "react"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="mainheader-nav">
      <Link to="/new-story">
        <Button variant="success">Write</Button>
      </Link>
      <Link to="/profile/:id">
        <Button variant="light">Profile</Button>
      </Link>
      <Link to="/">
        <Button variant="light">Home</Button>
      </Link>
    </div>
  )
}

export default NavBar