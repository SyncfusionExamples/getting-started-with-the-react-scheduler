import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import reactConfiguration from "./react-config";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
reactConfiguration();
