import React from "react"
import { Button, Card } from "react-bootstrap"


function TrendingStory({ story }) {

  return (
    <div className="trending-story">
      <Card>
        <Card.Header as="h5">username</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>
            Topic | Read Time
          </Card.Text>
          <Button variant="primary">View Story</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TrendingStory