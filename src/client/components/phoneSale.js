import { $ } from "../../utils";
import { ProductGetById } from "../../api/products";
import { FindOneProduct } from "../../api/products";
import { addToCart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const PhoneSale = {
    async render() {
        const { data } = await ProductGetById("3");
        return /* html */ `
            <div class=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]"> 
                <i class="fab fa-hotjar text-[#cd1817] font-black text-2xl uppercase ml-2 mt-4 mb-4">  Khuyến mãi hot</i>
                <div class="grid grid-cols-4 gap-5">
                    ${data.map((product) => /* html */ `
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
                                <button class="cartPhone" data-id="${product.id}"><i class="fas fa-shopping-cart text-white hover:text-teal-600"> Thêm vào giỏ hàng</i></button>
                            </div>
                        </div>           
                    `).join("")}
                </div>
            </div>
        `;
    },
    afterRender() {
        const phone = document.querySelectorAll(".cartPhone")
        phone.forEach(btn => {
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

export default PhoneSale;