import { createRoot } from "react-dom/client";
import { SignIn } from "./authform";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<SignIn />);