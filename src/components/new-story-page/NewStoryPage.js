import React, {useState} from "react";
import NewStoryHeader from "./NewStoryHeader"
import NewStoryForm from "./NewStoryForm"


function NewStoryPage({onAddStory}) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

 function handleSubmit(e) {
        e.preventDefault()
        //ultimately gets redirected to the publish story page 

        fetch("http://localhost:3000/stories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: content,
            }),
            })
            .then((r) => r.json())
            .then((newStory) => onAddStory(newStory));
}


    return (
        <div>
            <NewStoryHeader />
            <NewStoryForm setTitle={setTitle} setContent={setContent} />
            <button onSubmit={handleSubmit}>Submit Story</button>
        </div>
    )

}

export default NewStoryPage;