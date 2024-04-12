import { masterTask } from "./src/masterTask"
import { product } from "./src/product"

if (window.location.pathname === "/") {
    masterTask();
}
if (window.location.pathname === "/product.html") {
    product();
}

import './style.css'