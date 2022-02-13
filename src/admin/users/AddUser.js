import axios from "axios";
import { CreateOneUser } from "../../api/user";
import HeaderDashboard from "../HeaderDashboard";

const AddUsers = {
    afterRender() {
        const formHandle = document.querySelector("#formHandle");
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
                    username: formHandle.username.value,
                    email: formHandle.email.value,
                    password: formHandle.password.value,
                    role: formHandle.role.value,
                }

                CreateOneUser(payload).then(res => {
                    location.href = "/admin/users"
                })
            })
        }
    },
    render() {
        return /* html */ `
        <div class="min-h-full">
            
            ${HeaderDashboard.render()}
            
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                Add Users
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
                            </div>
                            <div class="mb-3">
                                <label class="block mb-1 font-semibold">Username</label>
                                <input type="text" name="username" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                            </div>
                            <div class="mb-3">
                                <label class="block mb-1 font-semibold">Email</label>
                                <input type="text" name="email" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                            </div>
                            <div class="mb-3">
                                <label class="block mb-1 font-semibold">Password</label>
                                <input type="text" name="password" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                            </div>
                            <div class="flex justify-around">
                                <div><input type="radio" id="role" name="role" value="0"> Khách hàng</div>
                                <div> <input type="radio" id="role" name="role" value="1"> Quản trị viên</div>
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
export default AddUsers;