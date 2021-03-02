import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";
function App() {
  function addNote(note) {
    
  }
  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote} />
      
      <Footer/>
    </div>
  );
}

export default App;
