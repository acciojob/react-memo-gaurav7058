import React from "react";

const ReactMemoComponent = React.memo(({ task }) => {
  console.log("Rendering task:", task);
  return <li>{task}</li>;
});

export default ReactMemoComponent;
