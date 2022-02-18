export const $ = (element) => {
    const selectors = document.querySelectorAll(element);
    return selectors.length === 1 ? selectors[0] : selectors;
}

window.currencyPrice = function (price) {
    price = Number(price);
    return price.toLocaleString("vi", { style: "currency", currency: "VND" });
};