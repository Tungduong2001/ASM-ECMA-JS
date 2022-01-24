import Banner from "../components/banner";
import Catebox from "../components/catebox";
import Product from "../components/product";
import Promotion from "../components/promotion";
const Content = {
    render() {
        return /* html */ `
            ${Promotion.render()}
            ${Banner.render()}
            ${Catebox.render()}
            ${Product.render()}
        `;
    },
};

export default Content;