import Header from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content";
import Storage from "../../utils/Storage";

const HomePage = {
    async render() {
        const authLogin = Storage.get("user");
        return /* html */ `
        <div class="container bg-red-700 min-w-full m-auto">
        <header>
            ${await Header.render(authLogin)}
        </header>
            <div class="">
                ${await Content.render()}
            </div>
            ${Footer.render()}
        </div>
        `;
    },
    afterRender() {
        Header.afterRender();
        Content.afterRender()
    }
};

export default HomePage;