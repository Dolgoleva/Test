import { createRoot } from "react-dom/client";
import { Body } from "./main";
import { Footer } from "./footer";
import { ButtonAppBar } from "./header";

const container = document.getElementById("app")
const root = createRoot(container)
root.render(
     <>
      <ButtonAppBar />,
    <Body/>,
   <Footer/>,
    </>
 );