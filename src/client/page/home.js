import Footer from "../components/footer";
import Header from "../components/header";
import Promotion from "../components/promotion";

const HomePage = {
    render() {
        return /* html */ `
        <div class="container bg-red-700 min-w-full m-auto">
            ${Header.render()}
            ${Promotion.render()}
            ${Banner.render()}
            ${Catebox.render()}
        </div>
            
            ${Footer.render()}
        `;
    },
};

export default HomePage;