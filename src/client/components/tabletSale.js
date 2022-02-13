import { FindAllProducts } from "../../api/products";

const TabletSale = {
    async render() {
        const { data } = await FindAllProducts();
        return /* html */ `
            <div class=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]"> 
                <p class="font-bold uppercase text-lg ml-2 my-3">TABLET GIẢM ĐẾN 10%++</p>
                <div class="grid grid-cols-4 gap-5">
                ${data.map((product) =>/* html */`
                    <a href="">
                        <div class="group product">
                            <div class="product-image">
                                <img src="${product.avatar}" alt="">
                            </div>
                            <p class="product-name">${product.name}</p>
                            <div class="flex justify-center">
                                <span class="product-price">${product.price}</span>
                                <span class="line-through mb-8">${product.cost}</span>
                            </div>
                            <div class="add-to-cart">
                                <p><i class="fas fa-shopping-cart text-white hover:text-teal-600"> Thêm vào giỏ hàng</i></p>
                            </div>
                        </div>
                    </a>
                `).join("")}
                </div>
            </div>
        `;
    },
};

export default TabletSale;