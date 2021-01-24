import React from "react";
import NewStoryHeader from "./NewStoryHeader"
import NewStoryForm from "./NewStoryForm"


function NewStoryPage() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <NewStoryHeader />
            <NewStoryForm />
            <button onSubmit={handleSubmit}>Submit Story</button>
        </div>
    )

}

export default NewStoryPage;