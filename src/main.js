import Navigo from "navigo";
import HomePage from "./client/page/home";

const router = new Navigo("/");

const print = content => {
    document.getElementById("content").innerHTML = content.render();
};

router.on({
    "/": () => print(HomePage),
});

router.resolve();