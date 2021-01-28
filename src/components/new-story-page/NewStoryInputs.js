import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function NewStoryInputs({readTime, setReadTime, topics, storyTopic, setStoryTopic}) {

        return (
          <div className="story-readtime-input">
            <p>read time</p>
            <input
              type="number"
              name="readtime"
              placeholder="mins"
              value={readTime}
              onChange={(e) => setReadTime(parseInt(e.target.value))}
            />{" "}
            <br />
            <input
                type="text"
                name="topic"
                placeholder="Related Topic"
                value={storyTopic}
                onChange={(e) => setStoryTopic(e.target.value)}
                />
          </div>
        );
}

export default NewStoryInputs;