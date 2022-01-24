const Product = {
    render() {
        return /* html */ `
            <div class="mt-5 mx-auto w-[1200px]">
                <h2
                    class="bg-[#1c1c1c] text-white text-lg rounded-[15px] w-[250px] h-[50px] leading-[50px] pl-8 uppercase font-bold ">
                    Apple
                </h2>
            </div>
            <div class=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px]"> 
                <div class="grid grid-cols-4 gap-5">
                    <a href="">
                        <div class="group product">
                            <div class="product-image">
                                <img src="https://uqoojcos5nobj.vcdn.cloud/uploads/2021/11/13-2-300x300.jpg" alt="">
                            </div>
                            <p class="product-name">iPhone 13 Pro Max 256GB</p>
                            <div class="flex justify-center">
                                <span class="product-price">30.990.000 ₫</span>
                                <span class="line-through mb-8">33.990.000 ₫</span>
                            </div>
                            <div class="add-to-cart">
                                <p><i class="fas fa-shopping-cart text-white hover:text-teal-600"> Thêm vào giỏ hàng</i></p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    },
};

export default Product;