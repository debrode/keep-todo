import React,{useState} from "react";

function CreateArea(prop){
    const [note,setNote]=useState({
        title:"",
        Content:""
    })

    function handleChange(e) {
        const {name,value}=e.target;
        setNote(prev=>
            {
                return {
                    ...prev,
                    [name]:value

                };

            });
    }
    function submitNote(e) {
        prop.onAdd(note);
        e.preventDefault();

    }
    return (
       <div >
           <form>
               <input name="title" onChange={handleChange} value={note.title} placeholder="title"/>
               <textarea name=" content" onChange={handleChange} value={note.content} placeholder="content" rows="3"/>
               <button onClick={submitNote}>Add</button>
           </form>
           
       </div>
    );
}

export default CreateArea;