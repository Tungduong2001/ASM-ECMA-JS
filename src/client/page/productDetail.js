import Header from "../components/header";
import Footer from "../components/footer";
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
                    <div class="mr-3">
                        <div class="border-[1px]">
                            <a href=""><img src="https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2021/11/4/637716443491808351_4.jpg"></a>
                        </div>
                        <div class="flex flex-row justify-center">
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
                        <div class="flex mt-3 justify-center">
                            <div class="flex mr-2">
                                <i class="fas fa-award text-red-700  mr-2"></i>
                                <p class="text-sm">Hàng chính hãng - bảo hành 12 Tháng</p>
                            </div>
                            <div class="flex">
                                <i class="fas fa-shipping-fast text-red-700  mr-2"></i>
                                <p class="text-sm">Giao hàng toàn quốc</p>
                            </div>  
                        </div>
                        <div class="w-[65%] mx-auto border-[1px] rounded-2xl mt-4">
                            <strong class="flex justify-center border-b-[1px] bg-red-700 text-lg text-white py-2 rounded-t-2xl">Tình trạng máy</strong>
                            <p class="mx-2 text-sm">Máy mới nguyên seal Fullbox chính hãng VN/A, chưa Active. Bảo hành 12 tháng tại trung tâm bảo hành ủy quyền chính hãng.</p>
                        </div>
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
                        <div class="box-Promo">
                            <div class="border-b-[1px] py-2 pl-2 font-bold">Chọn 1 trong 2 khuyến mãi sau</div>
                            <ul class="boxPromo-list">
                                <li class="promo-radio">
                                    <label class="">
                                        <input type="radio" class="" name="GB" value="personal">
                                        Lì xì ngay 3.000.000đ áp dụng đến 31/01 
                                    </label>  
                                </li>
                                <li class="promo-radio">
                                    <label class="">
                                        <input type="radio" class="" name="GB" value="busines">
                                        Trả góp 0% 
                                    </label>
                                </li>
                            </ul>
                            <div class="endow">
                                <span class="bg-[#e9ecef] px-3 font-bold">Ưu đãi thêm</span>
                            </div>
                            <ul class="content-promo">
                                <li class="inline-flex">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <div>
                                        <span>
                                            Tặng gói iCloud 50GB miễn phí 3 tháng
                                        </span>
                                        <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li class="inline-flex">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <div>
                                        <span>
                                            Giảm sốc 50% cho gói bảo hành vàng chỉ từ 550.000đ
                                        </span>
                                        <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li class="inline-flex">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <div>
                                        <span>
                                            Thu cũ đổi mới trợ giá 15%
                                        </span>
                                        <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li class="inline-flex">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <div>
                                        <span>
                                            Bảo hành 2 năm chính hãng
                                        </span>
                                        <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li class="inline-flex">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <div>
                                        <span>
                                            Tặng PMH 200.000đ mua Sạc Magsafe
                                        </span>
                                        <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li class="inline-flex">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <div>
                                        <span>
                                            Tặng PMH 300.000đ mua Ốp lưng chính hãng
                                        </span>
                                        <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li class="inline-flex">
                                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                    <div>
                                        <span>
                                            Cơ hội trúng 22 Hổ Vàng trị giá 6 triệu
                                        </span>
                                        <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="box-Feature mt-3">
                            <ul>
                                <li class="flex ">
                                    <img class="w-[60px] h-[60px] border-[1px] p-2 rounded-md mt-1"src="https://fptshop.com.vn/Uploads/Originals/2021/12/29/637763828066069271_logo-Masster-card.jpg">
                                    <div class="form-check absolute">
                                        <input class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-re focus:outline-none transition duration-200 mt-10 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-2 " type="checkbox" value="" id="flexCheckDefault">
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-bold">Ưu đãi dành cho chủ thẻ Master Card</p>
                                        <div class="text-sm">
                                            <span>Giảm thêm 150.000đ khi khách hàng thanh toán Online 100% giá trị đơn hàng trên 2 triệu qua thẻ Master Card</span>
                                            <a class="text-blue-600 hover:underline" href="">Xem chi tiết</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="flex mt-2">
                                    <img class="w-[60px] h-[60px] border-[1px] p-2 rounded-md mt-1"src="https://fptshop.com.vn/Uploads/Originals/2020/12/1/637424313308028550_vnpay.jpg">
                                    <div class="form-check absolute">
                                        <input class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-re focus:outline-none transition duration-200 mt-10 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-2 " type="checkbox" value="" id="flexCheckDefault">
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-bold">Thanh toán VNPAY-QR</p>
                                        <div class="text-sm">
                                            <span>Nhập mã FPTIP13 giảm ngay 5% tối đa 500.000đ khi thanh toán qua VNPAY-QR</span><br>
                                            <a class="text-blue-600 hover:underline" href="">Xem chi tiết</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-buy ">
                            <button class="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800">
                                <div>
                                    <strong>MUA NGAY</strong>
                                </div>
                                <p class="text-sm">Giao hàng miễn phí hoặc nhận tại shop</p>
                            </button>
                            <div class="flex mt-3">
                                <a href="" class="bg-blue-600 w-[50%] mr-3 rounded-md text-center text-white hover:bg-blue-700">
                                    <div>
                                        <strong>TRẢ GÓP 0%</strong>
                                    </div>
                                    <p class="text-sm">Duyệt nhanh qua điện thoại</p>
                                </a>
                                <a href="" class="bg-blue-600 w-[50%]  rounded-md text-center text-white hover:bg-blue-700">
                                    <div>
                                        <strong>TRẢ GÓP QUA THẺ</strong>
                                    </div>
                                    <p class="text-sm">Visa, Master Card, JCB</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    
                </div>
                <div>
                
                </div>
            </div>
            <div class="border-t-[1px]">
                ${Footer.render()}
            </div>
        `;
    },
};
export default ProductDetail;