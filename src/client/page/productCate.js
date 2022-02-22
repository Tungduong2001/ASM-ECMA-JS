import Header from "../components/header";
import Storage from "../../utils/Storage";
import { ProductGetByCate } from "../../api/products";
import Footer from "../components/footer";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { FindOneProduct } from "../../api/products";
import { addToCart } from "../../utils/cart";
import Promotion from "../components/promotion";
const ProductCate = {
    async render(id) {
        const authLogin = Storage.get("user");
        const { data } = await ProductGetByCate(id);
        return /* html */`
            <div class="bg-red-700">
                <header class="bg-red-700">
                    ${await Header.render(authLogin)}
                </header>
                <main class="mb-5">
                    ${Promotion.render()}
                    <div class=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]"> 
                    <div class="text-center font-bold text-xl my-5">${data.name}</div>
                    <div class="grid grid-cols-4 gap-5">
                        ${data.products.map((product) =>/* html */`
                        <div class="group product relative">
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
                                <button class="cate" data-id="${product.id}"><i class="fas fa-shopping-cart text-white hover:text-teal-600"> Thêm vào giỏ hàng</i></button>
                            </div>
                        </div>           
                        `).join("")}
                    </div >
                    </div >
                </main >
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `
    },
    afterRender() {
        const search = document.querySelectorAll(".cate")
        search.forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id
                const { data } = await FindOneProduct(id);
                addToCart({ ...data, quantity: 1 }, function () {
                    toastr.success(`Thêm ${data.name} vào giỏ hàng thành công!`);
                })
            });
        })
        Header.afterRender();
    }
};
export default ProductCate; 