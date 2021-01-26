import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

function Topic({ topic }) {
    const { name } = topic;
    return (
        <ButtonGroup>
            <Button variant="light" className="topic-item">{name}</Button>
        </ButtonGroup>
    )
}

export default Topic;