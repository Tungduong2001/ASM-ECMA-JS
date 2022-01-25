/* eslint-disable object-curly-spacing */
import Navigo from "navigo";
import Signin from "./client/login/signin";
import Signup from "./client/login/signup";
import HomePage from "./client/page/home";
import Laptop from "./client/page/laptop";
import PhoneProduct from "./client/page/phone";
import ProductDetail from "./client/page/productDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = content => {
    document.getElementById("content").innerHTML = content.render();
};

router.on({
    "/": () => print(HomePage),
    "/signin": () => print(Signin),
    "/signup": () => print(Signup),
    "/phones": () => print(PhoneProduct),
    "/laptop": () => print(Laptop),
    "/productDetail": () => print(ProductDetail),
});

router.resolve();