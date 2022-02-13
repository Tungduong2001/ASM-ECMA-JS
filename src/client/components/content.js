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
import Service from "./service";

const Content = {
    async render() {
        return /* html */ `
            ${Promotion.render()}
            ${Banner.render()}
            ${Catebox.render()}
            ${await PhoneSale.render()}
            ${BannerIphone.render()}
            ${await LaptopSale.render()}
            ${BannerTablet.render()}
            ${await TabletSale.render()}
            ${BannerBottom.render()}
            ${HotAccessory.render()}
            ${Service.render()}
        `;
    },
};

export default Content;