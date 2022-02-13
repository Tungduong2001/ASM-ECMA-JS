import { FindAllProducts, RemoveOneProduct } from "../../api/products";
import { reRender } from "../../utils/reRender";
import HeaderDashboard from "../HeaderDashboard";

const ListProducts = {
    afterRender() {
        const deleteHandle = document.querySelectorAll(".btn-delete");
        deleteHandle.forEach(button => {
            button.onclick = () => {
                const productID = button.getAttribute("data-id");
                RemoveOneProduct(productID).then(res => {
                    if (confirm("Are you sure")) {
                        reRender(ListProducts, "#content");
                    }
                })
            }
        })
    },
    async render() {
        const { data } = await FindAllProducts()
        return /* html */ `
            <div class="min-h-full">
                ${HeaderDashboard.render()}
                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold text-gray-900">
                        ListProducts
                        </h1>
                    </div>
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
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Cost
                                            </th>
                                            <th class="px-6 py-3 text-right">
                                                <a class="border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1" href="/admin/products/add">Add Products</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        ${data.map((product, index) => {
            return /* html */ `
                                               <tr>
                                                    <td class="px-6 py-3 max-w-[30px] w-[30px] text-center font-semibold">
                                                        ${index + 1}
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                        <img src="${product.avatar}" class="w-20 h-20"/>
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                     ${product.name}
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                     ${product.price}
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                     ${product.cost}
                                                    </td>
                                                    <td class="px-6 py-3 text-right">
                                                        <a class="border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1" href="/admin/products/${product.id}/edit">Edit</a>
                                                        <button class="btn-delete border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1" data-id="${product.id}">Delete</button>
                                                    </td>
                                               </tr>
                                            `;
        }).join("")}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;
    }
}
export default ListProducts;