import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";
import CreateArea from "./CreateArea";
function App() {
  
  return (
    <div className="App">
      <Header/>
      <CreateArea/>
      {notes.map((note) => 
  <Note key={note.key} title={note.title} Content={note.Content} />
  )}
      <Footer/>
    </div>
  );
}

export default App;
