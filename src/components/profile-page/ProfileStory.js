import React from "react";
import { Card, Button } from "react-bootstrap"

function ProfileStory({story, handleDeleteProfileStory}) {

    return (
      <div>
        <Card>
          <Card.Header as="h5">{story.title}</Card.Header>
          <Card.Body>
            <Card.Title>{story.topic} | {story.read_time}</Card.Title>
            <Card.Text>{story.title}</Card.Text>
            <Button variant="light">View Story</Button>
            <br />
            <Button onClick={e => handleDeleteProfileStory(story.id)} variant="danger">Delete Story</Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default ProfileStory;