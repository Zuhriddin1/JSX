import { createRoot } from "react-dom/client";
import "./main.css";
import Header from "./header";
const rootDiv = document.getElementById("root");
const root = createRoot(rootDiv);
console.log(root);
root.render(Header);
root.render()