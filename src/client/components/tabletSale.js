import { $ } from "../../utils";
import { ProductGetById } from "../../api/products";
import { FindOneProduct } from "../../api/products";
import { addToCart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const TabletSale = {
    async render() {
        const { data } = await ProductGetById("4");
        return /* html */ `
            <div class=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]"> 
                <p class="font-bold uppercase text-lg ml-2 my-3">TABLET GIẢM ĐẾN 10%++</p>
                <div class="grid grid-cols-4 gap-5">
                    ${data.map((product) =>/* html */`
                        <input type="hidden" value="${product.id}" id="idTablet">
                        <div class="group product">
                            <a href="/productDetail/${product.id}">
                                <div class="product-image">
                                    <img src="${product.avatar}" alt="">
                                </div>
                                <p class="product-name">${product.name}</p>
                                <div class="flex justify-center">
                                    <span class="product-price">${currencyPrice(product.price)}</span>
                                    <span class="line-through mb-8">${currencyPrice(product.cost)}</span>
                                </div>
                            </a>
                            <div class="add-to-cart">
                                <button class="cartTablet" data-id="${product.id}"><i class="fas fa-shopping-cart text-white hover:text-teal-600"> Thêm vào giỏ hàng</i></button>
                            </div>
                        </div>           
                    `).join("")}
                </div>
            </div>
        `;
    },
    afterRender() {
        const tablet = document.querySelectorAll(".cartTablet")
        tablet.forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id
                const { data } = await FindOneProduct(id);
                addToCart({ ...data, quantity: 1 }, function () {
                    toastr.success(`Thêm ${data.name} vào giỏ hàng thành công!`);
                })
            });
        })
    }
};

export default TabletSale;