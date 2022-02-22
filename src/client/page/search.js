import Header from "../components/header";
import Storage from "../../utils/Storage";
import { SearchProductByName } from "../../api/products";
import Footer from "../components/footer";
import { FindOneProduct } from "../../api/products";
import { addToCart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Promotion from "../components/promotion";
const Search = {
    async render({ keyword }) {
        const authLogin = Storage.get("user");
        const { data } = await SearchProductByName(keyword)
        return /* html */`
            <div class="bg-red-700">
                <header class="bg-red-700">
                    ${await Header.render(authLogin)}
                </header>
                ${Promotion.render()}
                <main class="mb-5">
                    <div class=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]">
                    <p class="font-bold uppercase text-lg ml-2 my-3">Kết quả tìm kiếm cho từ khóa: "${keyword}"</p>
                    <div class="grid grid-cols-4 gap-5">
                        ${data.length > 0 ? data.map((product) =>/* html */`
                        <div class="group ">
                            <div class="product">
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
                                    <button class="search" data-id="${product.id}"><i class="fas fa-shopping-cart text-white hover:text-teal-600"> Thêm vào giỏ hàng</i></button>
                                </div>
                            </div>
                        </div>           
                        `).join("") : /* html */ `
                            <p class="text-center col-span-4 py-5">Không tìm thấy kết quả</p>
                        `}
                    </div>
                    </div>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `
    },
    afterRender() {
        const search = document.querySelectorAll(".search")
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
export default Search; 