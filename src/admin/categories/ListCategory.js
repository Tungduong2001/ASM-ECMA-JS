import { getAllCates, removeCates } from "../../api/category";
import HeaderDashboard from "../HeaderDashboard";
import { reRender } from "../../utils/reRender";
const ListCategory = {
    afterRender() {
        const deleteHandle = document.querySelectorAll(".btn-delete");
        deleteHandle.forEach(button => {
            button.onclick = () => {
                const productID = button.getAttribute("data-id");
                removeCates(productID).then(res => {
                    if (confirm("Are you sure")) {
                        reRender(ListCategory, "#content");
                    }
                })
            }
        })
    },
    async render() {
        const { data } = await getAllCates()
        return /* html */ `
            <div class="min-h-full">
                ${HeaderDashboard.render()}
                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold text-gray-900">
                        ListCategories
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
                                                Name
                                            </th>
                                           
                                            <th class="px-6 py-3 text-right">
                                                <a class="border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1" href="/admin/category/add">Add Category</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        ${data.map((category, index) => {
            return /* html */ `
                                               <tr>
                                                    <td class="px-6 py-3 max-w-[30px] w-[30px] text-center font-semibold">
                                                        ${index + 1}
                                                    </td>
                                                    <td class="px-6 py-3 text-left">
                                                        ${category.name}
                                                    </td>
                                                    
                                                    <td class="px-6 py-3 text-right">
                                                        <button class="btn-delete border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1" data-id="${category.id}">Delete</button>
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
export default ListCategory;