import React, { useState, useEffect } from "react";
import ResizePanel from "react-resize-panel";
import Editor from "./Editor";

export default function Content() {
    const [html, setHtml] = useState("");
    const [css, setcss] = useState("");
    const [js, setjs] = useState("");

    const srcDoc = `
       <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
        `;

  return (
      <div>
    <ResizePanel 
        direction="s" 
        handleClass="resizer-handle--v" 
        borderClass="resizer-border--v" 
        style={{ height: "50%" }}
      >
        <div className="panel pane top-pane">
          <ResizePanel 
            direction="e" 
            handleClass="resizer-handle--h" 
            borderClass="resizer-border--h" 
            style={{width:"33%"}}
          >
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              className="html"
              onChange={setHtml}
            />
          </ResizePanel>
          <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setcss}
          />
          <ResizePanel 
            direction="w" 
            handleClass="resizer-handle--h" 
            borderClass="resizer-border--h" 
            style={{width:"33%"}}
          >
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              onChange={setjs}
            />
          </ResizePanel>
        </div>
      </ResizePanel>
      <div className="panel output">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
        </div>
        </div>
  );
}
