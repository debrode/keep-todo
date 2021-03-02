import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(prop){
    const [isExpanded, setExpanded] = useState(false);
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
        setNote({
            title:"",
            Content:"" 
        })
        e.preventDefault();

    }
    function expand() {
        setExpanded(true);
      }
    return (
       <div  >
           <form className="create-note">
               
               {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea name="Content" onClick={expand} onChange={handleChange} value={note.Content} placeholder="content" rows={isExpanded ? 3 : 1}/>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
           </form>
           
       </div>
    );
}

export default CreateArea;