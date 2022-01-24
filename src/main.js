/* eslint-disable object-curly-spacing */
import Navigo from "navigo";
import HomePage from "./client/page/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = content => {
    document.getElementById("content").innerHTML = content.render();
};

router.on({
    "/": () => print(HomePage),
});

router.resolve();