import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
    render() {
        return /* html */ `
            ${Header.render()}
            <div class="text-white">hihi</div>
            ${Footer.render()}
        `;
    },
};

export default HomePage;