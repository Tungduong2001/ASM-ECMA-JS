import { addCates } from "../../api/category";
import HeaderDashboard from "../HeaderDashboard";
const Category = {
    render() {
        return /* html */ `
        <div class="min-h-full">
            
            ${HeaderDashboard.render()}

            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                Add Cate
                </h1>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                    <div class="border-4 border-dashed border-gray-200 rounded-lg p-4">
                        <form id="formHandle">
                            <div class="mb-3">
                                <label class="block mb-1 font-semibold">CateName</label>
                                <input type="text" id="catename" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                            </div>
                            <select class="mb-3" id="type">
                                <option value="0">Điện thoại</option>
                                <option value="1">Laptop</option>
                                <option value="2">Tablet</option>
                            </select>
                            <div class="text-right pt-3">
                                <button type="submit" class="mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block">ADD</button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /End replace -->
            </div>
            </main>
            </div>
        `;
    },
    afterRender() {
        const formHandle = document.querySelector("#formHandle");
        formHandle.addEventListener("submit", (e) => {
            e.preventDefault();
            addCates({
                name: document.getElementById("catename").value,
                type: document.getElementById("type").value
            }).then(res => window.location.href = "/admin/category")
        })
    }
}
export default Category;
