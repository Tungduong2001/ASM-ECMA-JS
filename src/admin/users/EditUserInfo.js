import axios from "axios";
import { FindOneUser, UpdateOneUser } from "../../api/user";
import HeaderDashboard from "../HeaderDashboard";

const EditUsers = {
    afterRender({ id }) {
        const formHandle = document.querySelector("#formHandle");
        const imgPreview = document.querySelector('#previewImage');

        formHandle.avatar.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(formHandle.avatar.files[0])
        });

        formHandle.onsubmit = async (e) => {
            e.preventDefault();
            let imgUploadedLink = "";
            if (formHandle.avatar.files[0]) {
                const formData = new FormData();
                formData.append("file", formHandle.avatar.files[0]);
                formData.append("upload_preset", "iscg0aqa");

                const { data } = await axios({
                    url: "https://api.cloudinary.com/v1_1/asm-js-ecma/image/upload",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-formendcoded",
                    },
                    data: formData
                });
                imgUploadedLink = data.url
            }

            const payload = {
                id: formHandle.id.value,
                role: formHandle.role.value,
                avatar: imgUploadedLink ? imgUploadedLink : imgPreview.src,
                username: formHandle.username.value,
            }

            UpdateOneUser(payload).then(res => {
                location.href = "/admin/users"
            })
        }
    },
    render: async function ({ id }) {
        const { data } = await FindOneUser(id);
        return /* html */ `
            <div class="min-h-full">
                ${HeaderDashboard.render()}
                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold text-gray-900">
                        Edit Users
                        </h1>
                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div class="px-4 py-6 sm:px-0">
                            <div class="border-4 border-dashed border-gray-200 rounded-lg p-4">
                                <form id="formHandle">
                                    <input type="hidden" name="id" value="${data.id}">
                                    <input type="hidden" name="role" value="${data.role}">
                                    <div class="mb-3">
                                        <label class="block mb-1 font-semibold">Avatar</label>
                                        <input type="file" name="avatar" class="px-[10px] py-1 border rounded w-full focus:outline-0">
                                        <div><img width="200" src="${data.avatar}" id="previewImage" /></div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="block mb-1 font-semibold">Username</label>
                                        <input type="text" name="username" class="px-[10px] py-1 border rounded w-full focus:outline-0" value="${data.username}">
                                    </div>
                                    <div class="text-right pt-3">
                                        <button type="submit" class="mr-1 uppercase border text-[12px] min-w-[150px] border-gray-400 px-3 py-1 rounded hover:bg-gray-200 shadow-inner hover:shadow-gray-400 hover:shadow-sm hover:border-gray-500 duration-300 inline-block">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;
    }
}
export default EditUsers;