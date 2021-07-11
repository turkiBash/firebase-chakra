import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { extendTheme} from "@chakra-ui/react"
const MyTheme = extendTheme({
  color:{
      primary: "#e2f4fb",
      secondary:"#3c8da8",
      highlight:"#9b89b3",
      warning: "#c34a36",

  },})
  
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={MyTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
