import Banner from "../components/banner";
import Catebox from "../components/catebox";
import Footer from "../components/footer";
import Header from "../components/header";
import Promotion from "../components/promotion";

const HomePage = {
    render() {
        return /* html */ `
            ${Header.render()}
            ${Promotion.render()}
            ${Banner.render()}
            ${Catebox.render()}
            ${Footer.render()}
        `;
    },
};

export default HomePage;