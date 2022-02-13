import { FindAllProducts } from "../../api/products";

const PhoneSale = {
    async render() {
        const { data } = await FindAllProducts();
        return /* html */ `
            <div class=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]"> 
                <i class="fab fa-hotjar text-[#cd1817] font-black text-2xl uppercase ml-2 mt-4 mb-4">  Khuyến mãi hot</i>
                <div class="grid grid-cols-4 gap-5">
                    ${data.map((product) => /* html */ `
                        <a href="">
                            <div class="group product">
                                <div class="product-image">
                                    <img src="${product.avatar}" alt="">
                                </div>
                                <p class="product-name">${product.name}</p>
                                <div class="flex justify-center">
                                    <span class="product-price">${product.price}</span>
                                    <span class="line-through mb-8">${product.cost}</span>
                                </div>
                                <div class="add-to-cart">
                                    <p><i class="fas fa-shopping-cart text-white hover:text-teal-600"> Thêm vào giỏ hàng</i></p>
                                </div>
                            </div>
                        </a>
                    `).join("")}
                </div>
            </div>
        `;
    },
};

export default PhoneSale;