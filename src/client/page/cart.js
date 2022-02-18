import { $ } from "../../utils";
import { removeItemInCart } from "../../utils/cart";
import { reRender } from "../../utils/reRender";
import { increaseItemInCart } from "../../utils/cart";
import { decreaseItemInCart } from "../../utils/cart";
import Header from "../components/header";
import Storage from "../../utils/Storage";
const CartPage = {
    async render() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const authLogin = Storage.get("user");
        let total = 0;
        return /* html */`
            <header class="bg-red-700">
                ${await Header.render(authLogin)}
            </header>
            <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <!-- Replace with your content -->
                        <div class="px-4 py-6 sm:px-0">
                            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                STT
                                            </th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Avatar
                                            </th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Price
                                            </th>
                                           
                                            <th class="px-6 py-3 text-right">
                                                
                                            </th>
                                            <th class="px-6 py-3 text-right">
                                                
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        ${cart.map((product, index) => {
            return /* html */ `
                                               <tr>
                                                    
                                                    <td class="px-6 py-3 max-w-[30px] w-[30px] text-center font-semibold">
                                                        ${index + 1}
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                        <img src="${product.avatar}" class="w-20"/>
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                     ${product.name}
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                     ${currencyPrice(product.price)}
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                        <button  data-id="${product.id}" class="btn increase border border-black p-2">+</button>
                                                            ${product.quantity}
                                                        <button  data-id="${product.id}" class="btn decrease border border-black p-2">-</button>
                                                    </td>
                                                   
                                                    <td class="px-6 py-3 text-right">
                                                        <button data-id="${product.id}" class="btn remove border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1">Remove</button>
                                                        
                                                    </td>
                                                    <td hidden>${total += product.price * product.quantity}</td>
                                               </tr>
                                            `;
        }).join("")}
                                    </tbody>
                                    <tfoot>
                                        <tr><td colspan="2" class="text-right">Tổng là: <span id="total">${currencyPrice(total)}</span></td></tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
        `
    },
    afterRender() {
        const btns = $('.btn');
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                const id = btn.dataset.id;
                if (btn.classList.contains('increase')) {
                    increaseItemInCart(id, function () {
                        reRender(CartPage, "#content");
                    });
                } else if (btn.classList.contains('decrease')) {
                    decreaseItemInCart(id, function () {
                        reRender(CartPage, "#content");
                    })
                } else {
                    removeItemInCart(id, function () {
                        reRender(CartPage, "#content");
                    });
                }
            })
        });
        Header.afterRender();
    }

};
export default CartPage; 