import React from "react";

function Note(prop){
    function handleClick() {
        prop.onDelete();
    }
    return (
       <div className="note">
           <h1>{prop.title}</h1>
           <p>{prop.Content}</p>
           <button onClick={handleClick}>Delete</button>
       </div>
    );
}

export default Note;