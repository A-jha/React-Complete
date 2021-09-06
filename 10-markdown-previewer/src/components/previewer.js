import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
const marked = require("marked");

const Previewer = ({ markdown }) => {
  const [isExpand, setIsExpand] = useState(false);
  const componentRef = useRef();
  marked.setOptions({
    breaks: true,
  });

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: pageStyle,
  });

  function getMarkdownText() {
    var rawMarkup = marked(markdown);
    return { __html: rawMarkup };
  }

  useEffect(() => {
    setIsExpand(true);
  }, []);

  const handleResize = () => {
    setIsExpand(!isExpand);
    const editorContainerFinal = document.getElementById(
      "editorContainerFinal"
    ).classList;
    if (isExpand) {
      editorContainerFinal.add("hidden");
    } else {
      editorContainerFinal.remove("hidden");
    }
  };

  return (
    <div
      className="preview-container expandedPrevContainer"
      id="finalPrevContainer"
    >
      <div className="previewHeader">
        <p className="previewTitle">Preview</p>
        <div className="icons">
          <i className="fas fa-print" onClick={handlePrint}></i>
          {isExpand ? (
            <i className="fas fa-expand" onClick={handleResize} />
          ) : (
            <i className="fas fa-compress" onClick={handleResize} />
          )}
        </div>
      </div>
      <div className="preview" ref={componentRef}>
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
    </div>
  );
};

const pageStyle = `
  
@media all {
  .page-break {
    display: none;
  }
}

@media print {
  html, body {
    height: initial !important;
    overflow: initial !important;
    background: linear-gradient(to right, #aaa, rgb(118, 201, 226));
    -webkit-print-color-adjust: exact;
    padding-bottom:2rem;
  }
}

@media print {
  .page-break {
    margin-top: 1rem;
    page-break-before: auto;
  }
}

@page {
  size: auto;
  margin: 20mm;
}

`;
export default Previewer;
