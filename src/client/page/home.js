import Header from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content";

const HomePage = {
    render() {
        return /* html */ `
        <div class="container bg-red-700 min-w-full m-auto">
            ${Header.render()}
            <div class="mb-10">
                ${Content.render()}
            </div>
            ${Footer.render()}
        </div>
        `;
    },
};

export default HomePage;