import { AffinityProvider, GlobalStyle } from "@allied-solutions/affinity";

import React from "react";

import theme from "./theme";
import ContainerSection from "./ContainerSection";
import Contain from "./Contain";
const App = () => {
  const [value, setValue] = React.useState(5);
  return (
    <AffinityProvider theme={theme}>
      <GlobalStyle />
      {/* <ContainerSection /> */}
      <Contain />
    </AffinityProvider>
  );
};

export default App;
