import React, { useState, useEffect } from "react";
const Editor = ({ markdown, setMarkdown }) => {
  const [isExpand, setIsExpand] = useState(false);
  useEffect(() => {
    setIsExpand(true);
  }, []);
  const expandHandler = () => {
    console.log("clicked");
    const container = document.getElementById("editorContainerFinal").style;
    const _editor = document.getElementById("editor").style;
    const prevContainer =
      document.getElementById("finalPrevContainer").classList;
    if (isExpand) {
      container.width = "100vw";
      _editor.width = "100vw";
      _editor.height = "90vh";
      prevContainer.add("hidden");
    } else {
      container.width = "70vw";
      _editor.width = "70vw";
      _editor.height = "30vh";
      prevContainer.remove("hidden");
    }
    setIsExpand(!isExpand);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  };

  return (
    <div className="editor-container" id="editorContainerFinal ignorePDF">
      <div className="editorHeader">
        <p className="editorTitle">editor</p>
        <div className="icons">
          {isExpand ? (
            <i className="fas fa-expand" onClick={expandHandler}></i>
          ) : (
            <i className="fas fa-compress" onClick={expandHandler}></i>
          )}
        </div>
      </div>
      <div id="editorContainerFinal">
        <textarea
          rows={10}
          className="textArea"
          id="editor"
          onChange={handleChange}
          value={markdown}
        />
      </div>
    </div>
  );
};

export default Editor;
