import axios from "axios";
import { getAllCates } from "../../api/category";
import { CreateOneProduct, FindAllProducts } from "../../api/products";
import HeaderDashboard from "../HeaderDashboard";

const AddProducts = {
    afterRender() {
        const formHandle = document.querySelector("#formHandle");
        const imgPreview = document.querySelector('#previewImage');
        formHandle.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(formHandle.avatar.files[0])
        });

        formHandle.onsubmit = (e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("file", formHandle.avatar.files[0]);
            formData.append("upload_preset", "iscg0aqa");

            axios({
                url: "https://api.cloudinary.com/v1_1/asm-js-ecma/image/upload",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-formendcoded",
                },
                data: formData
            }).then(res => {
                const payload = {
                    avatar: res.data.secure_url,
                    name: formHandle.name.value,
                    productCateId: formHandle.type.value,
                    price: formHandle.price.value,
                    cost: formHandle.cost.value
                }

                CreateOneProduct(payload).then(res => {
                    location.href = "/admin/products"
                })
            })
        }
    },
    async render() {
        const { data } = await FindAllProducts();
        const cate = await getAllCates();
        return /* html */ `
        <div class="min-h-full">
            
            ${HeaderDashboard.render()}
            
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                Add Products
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
                                <label class="block mb-1 font-semibold">Avatar</label>
                                    <input type="file" name="avatar" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                                    <div class="mt-3"><img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" id="previewImage" /></div>
                            </div>
                            <div class="mb-3">
                                <label class="block mb-1 font-semibold">Name</label>
                                <input type="text" name="name" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                            </div>
                            <select class="mb-3" id="type" name="type">
                                ${cate.data.map(item =>/* html */ `
                                    <option value="${item.id}">${item.name}</option>
                                `)}
                            </select>
                            <div class="mb-3">
                                <label class="block mb-1 font-semibold">Price</label>
                                <input type="text" name="price" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                            </div>
                            <div class="mb-3">
                                <label class="block mb-1 font-semibold">Cost</label>
                                <input type="text" name="cost" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                            </div>
                            <div class="text-right pt-3">
                                <button type="submit" class="mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /End replace -->
            </div>
            </main>
            </div>
        `;
    }
}
export default AddProducts;