import Header from "../components/header";
import StarRating from "../components/starRating";
const ProductDetail = {
    render() {
        return /* html */ `
            <div class="bg-red-700">
                ${Header.render()}
            </div>
            <div class="mx-auto w-[1200px] my-10">
                <div class="grid grid-cols-2 mb-3">
                    <h2 class="font-bold text-xl ">iPhone 13 Pro Max 128GB</h2>
                    <div class="mt-2 flex justify-end">
                        <a href="" class="mt-1">${StarRating.render()}</a>
                        <a href="" class="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 đánh giá</a>
                        <a href="" class="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 Hỏi & đáp</a>
                    </div>
                </div>
                <hr>
                <div class="grid grid-cols-2 mt-7">
                    <div class="border-[1px] mr-3">
                        <img src="https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/11/4/637716443491808351_4.jpg">
                    </div>
                    <div class="detail">
                        <div class="flex ">
                            <span class="text-red-700 font-semibold text-2xl mr-5 mt-2">30.990.000₫</span>
                            <span class="font-semibold text-lg line-through mt-3">30.990.000₫</span>
                            <span class="ml-52" >Trả góp chỉ từ 3.000.500₫/tháng</span>
                        </div>
                        <div class="mt-2 bg-slate-100 grid grid-cols-4 rounded-md">
                            <label class="radio">
                                <input type="radio" class="form-radio" name="GB" value="personal">
                                <span class="ml-1 font-bold">128GB</span>
                                <span class="block">30.990.000₫</span>
                            </label>
                            <label class="radio">
                                <input type="radio" class="form-radio" name="GB" value="busines">
                                <span class="ml-1 font-bold">256GB</span>
                                <span class="block">33.490.000₫</span>
                            </label>
                            <label class="radio">
                                <input type="radio" class="form-radio" name="GB" value="busines">
                                <span class="ml-1 font-bold">512GB</span>
                                <span class="block">40.990.000₫</span>
                            </label>
                            <label class="radio">
                                <input type="radio" class="form-radio" name="GB" value="busines">
                                <span class="ml-1 font-bold">1TB</span>
                                <span class="block">45.990.000₫</span>
                            </label>
                        </div>

                        <div class="flex flex-row">
                            <a href="" class="mt-3 text-center hover:font-bold">
                                    <img class="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217820889289_iphone-13-pro-max-vang-1.jpg">
                                    <p class="ml-3">Vàng</p>
                            </a>
                            <a href="" class="mt-3 text-center hover:font-bold ml-3">
                                    <img class="phone-color " src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217826201634_iphone-13-pro-max-xanh-1.jpg">
                                    <p class="ml-3">Xanh</p>
                            </a>
                            <a href="" class="mt-3 text-center hover:font-bold ml-3">
                                    <img class="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819795830_iphone-13-pro-max-xam-1.jpg">
                                    <p class="ml-3">Xám</p>
                            </a>
                            <a href="" class="mt-3 text-center hover:font-bold ml-3">
                                    <img class="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819171028_iphone-13-pro-max-bac-1.jpg">
                                    <p class="ml-3">Bạc</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
};
export default ProductDetail;