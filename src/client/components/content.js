import Banner from "../components/banner";
import Catebox from "../components/catebox";
import PhoneSale from "./phoneSale";
import Promotion from "../components/promotion";
import LaptopSale from "./laptopSale";
import BannerIphone from "./banner-iPhone";
import BannerTablet from "./bannerTablet";
import TabletSale from "./tabletSale";
import BannerBottom from "./bannerBottom";
import HotAccessory from "./accessory";

const Content = {
    render() {
        return /* html */ `
            ${Promotion.render()}
            ${Banner.render()}
            ${Catebox.render()}
            ${PhoneSale.render()}
            ${BannerIphone.render()}
            ${LaptopSale.render()}
            ${BannerTablet.render()}
            ${TabletSale.render()}
            ${BannerBottom.render()}
            ${HotAccessory.render()}
        `;
    },
};

export default Content;