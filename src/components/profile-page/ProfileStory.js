import React from "react";
import { Card, Button } from "react-bootstrap"
import { useSpring, animated } from "react-spring"

function ProfileStory({story, handleDeleteProfileStory}) {

  const props = useSpring({opacity: 1, from: {opacity: 0}})

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
            <br />
            <div className="profile-snap-div">
              <em>{story.snaps ? story.snaps : 0}</em><img className="snap-img" src="../../snapfinger.jpg"></img>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
}

export default ProfileStory;