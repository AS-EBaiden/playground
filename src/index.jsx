import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
// import Sample from "./Sample";
import Happy from "./Happy";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Sample /> */}
    <Happy />
  </StrictMode>
);
