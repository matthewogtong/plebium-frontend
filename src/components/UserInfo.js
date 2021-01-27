import React from "react"
import Card from "react-bootstrap/Card"

function UserInfo({ currentUser }) {

    return (
      <div className="user-info">
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Header>Your Bio</Card.Header>
          <Card.Body>
            <Card.Title>{currentUser.username}</Card.Title>
            <Card.Text>
              {currentUser.bio}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default UserInfo