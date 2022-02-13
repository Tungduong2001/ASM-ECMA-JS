const Header = {
    render(AuthLogin) {
        return /* html */`
            <header class="">
                <div class="header-top bg-red-700 flex justify-between h-[80px] w-[1200px] m-auto">
                    <figure class="logo pt-5">
                        <a href="/">
                            <img src="https://fptshop.com.vn/Content/Landing/logo-mb.png" width="150px">
                        </a>
                    </figure>
                    <form action="" class="w-[700px] mt-5 pl-10 flex ">
                        <input type="text" class="h-10 w-10/12 pl-3 rounded-sm"
                            placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm">
                        <button class="h-10"><i
                                class="fas fa-search bg-[#333333] text-white py-3 px-4 rounded-sm"></i></button>
                    </form>
                    <div class="flex mt-5 text-center">
                        <div class="news pr-5 ">
                            <a href="">
                                <i class="far fa-file-alt text-white " ></i>
                                <p class="text-white text-xs">Thông tin hay</p>
                            </a>
                            
                        </div>
                        <div class="water pr-5">
                            <a href="">
                                <p>
                                    <i class="fas fa-tint text-white"></i>
                                    <i class="fas fa-bolt text-white"></i>
                                </p>
                                <p class="text-white text-xs">Thu hộ điện nước</p>
                            </a>
                        </div>
                        <div class="cart">
                            <a href="">
                                <i class="fas fa-shopping-cart text-white"></i>
                                <p class="text-white text-xs">Giỏ hàng</p>
                            </a>
                        </div>
                        <div class="signin pl-5">
                            ${AuthLogin ?/* html */ `
                                ${AuthLogin.role == 1 ? /* html */`
                                    <span>
                                        <a href="/admin/dashboard">
                                            <i class="fas fa-user text-white"></i>
                                            <p class="text-white text-xs">
                                                ${AuthLogin.username}
                                            </p>
                                        </a>
                                        <a onclick="logout()" class="cursor-pointer text-white text-xs">Thoát</a>
                                    </span>
                                `: /* html */`
                                    <span>
                                        <i class="fas fa-user text-white"></i>
                                        <p class="text-white text-xs">
                                            ${AuthLogin.username}
                                            <a onclick="logout()" class="cursor-pointer">Thoát</a>
                                        </p>
                                    </span>
                                `}
                                 ` : /* html */ `
                                <a href="/signin">
                                    <i class="fas fa-user text-white"></i>
                                    <p class="text-white text-xs">Đăng Nhập</p>
                                </a>
                            `}
                            
                        </div>
                    </div>
                </div>
                <div class="min-w-full mx-auto bg-[#252525]">
                    <nav class="w-[1200px] mx-auto  text-white" id="navbar">
                        <ul class="flex justify-around py-3 relative">
                            <li class="group">
                                <a href="/phones" class="nav-bar">
                                    <i class="fas fa-mobile-alt"></i>
                                    <span class="">Điện thoại</span>
                                </a>
                                <div class="grid grid-cols-3 gap-x-64 mt-0 w-full border-2 max-h-[300px] absolute left-0  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                    <ul class="menu-item w-[500px]">
                                        <li class="menu-item-title">HÃNG SẢN XUẤT</li>
                                        <div class="menu-item-info grid grid-cols-3 text-sm leading-7 mb-4">
                                            <li><a href="">Apple(iPhone)</a></li>
                                            <li><a href="">Samsung</a></li>
                                            <li><a href="">Xiaomi</a></li>
                                            <li><a href="">Oppo</a></li>
                                            <li><a href="">Nokia</a></li>
                                            <li><a href="">Vivo</a></li>
                                            <li><a href="">Bphone</a></li>
                                            <li><a href="">Realme</a></li>
                                            <li><a href="">Masstel</a></li>
                                        </div>
                                        <li class="menu-item-title"><a href="">ĐỒNG HỒ THÔNG MINH</a></li>
                                        <div class="menu-item-info grid grid-cols-3 text-sm leading-7 ">
                                            <li><a href="">Apple Watch</a></li>
                                            <li><a href="">Samsung</a></li>
                                            <li><a href="">Xiaomi</a></li>
                                            <li><a href="">Oppo</a></li>
                                            <li><a href="">Masstel</a></li>
                                            <li><a href="">Garmin</a></li>
                                            <li><a href="">Huewei</a></li>
                                        </div>
                                    </ul>
                                    <div class="text-black">
                                        <p class="pl-5 pt-3 uppercase ml-6 font-bold">Bán chạy nhất</p>
                                        <div class="flex w-[400px]">
                                            <div class="w-[100px] ml-8 mt-2">
                                                <a href="">
                                                    <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/16/637620445702136793_samsung-galaxy-a22-5g-den-dd.jpg">
                                                </a>
                                            </div>
                                            <div>
                                                <a href=""><p class="text-sm mb-2 mt-2">Samsung Galaxy A22 5G</p></a>
                                                <span class="font-bold text-red-700">5.690.000 ₫</span>
                                            </div>
                                        </div>
                                        <div class="flex w-[400px]">
                                            <div class="w-[100px] ml-8 mt-2">
                                                <a href="">
                                                    <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/15/637699137820447063_oppo-a55-dd.jpg">
                                                </a>
                                            </div>
                                            <div>
                                                <a href=""><p class="text-sm mb-2 mt-2">OPPO A55 4GB-64GB</p></a>
                                                <span class="font-bold text-red-700">4.990.000 ₫</span>
                                            </div>
                                        </div>        
                                    </div>
                                   
                                    <div class="py-8">
                                        <a href="">
                                            <img class="w-[230px] float-right pr-8"
                                            src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/8/637772392778576314_F-H4_248x248.png">
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li class="group">
                                <a href="/laptop" class="nav-bar">
                                    <i class="fas fa-laptop"></i>
                                    <span class="">laptop</span>
                                </a>
                                <div class="grid grid-cols-3 gap-x-64 mt-0 w-full border-2 max-h-[300px] absolute left-0  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                    <ul class="menu-item w-[500px]">
                                        <li class="menu-item-title">HÃNG SẢN XUẤT</li>
                                        <div class="menu-item-info grid grid-cols-3 text-sm leading-7 mb-4">
                                            <li><a href="">Apple(MacBook)</a></li>
                                            <li><a href="">Acer</a></li>
                                            <li><a href="">Microsoft</a></li>
                                            <li><a href="">Asus</a></li>
                                            <li><a href="">HP</a></li>
                                            <li><a href="">DELL</a></li>
                                            <li><a href="">MSI</a></li>
                                            <li><a href="">Lenovo</a></li>                                     
                                        </div>
                                        <li class="menu-item-title"><a href="">PHẦN MỀM</a></li>
                                        <div class="menu-item-info grid grid-cols-3 text-sm leading-7 ">
                                            <li><a href="">Diệt Virus</a></li>
                                            <li><a href="">Microsoft Office</a></li>
                                            <li><a href="">Windows</a></li>
                                            <li><a href="">Phần mềm khác</a></li>
                                        </div>
                                    </ul>
                                    <div class="text-black">
                                        <p class="pl-5 pt-3 uppercase ml-6 font-bold">Bán chạy nhất</p>
                                        <div class="flex w-[400px]">
                                            <div class="w-[100px] ml-8 mt-2">
                                                <a href="">
                                                    <img src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/15/637751569796016673_acer-nitro-gaming-an515-45-den-dd.jpg">
                                                </a>
                                            </div>
                                            <div>
                                                <a href=""><p class="text-sm mb-2 mt-6">Laptop Acer Nitro Gaming</p></a>
                                                <span class="font-bold text-red-700">21.599.100 ₫</span>
                                            </div>
                                        </div>
                                        <div class="flex w-[400px]">
                                            <div class="w-[100px] ml-8 mt-2">
                                                <a href="">
                                                    <img src="https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/7/637639339928194488_msi-gaming-gf63-den-dd.jpg">
                                                </a>
                                            </div>
                                            <div>
                                                <a href=""><p class="text-sm mb-2 mt-6">Laptop MSI Gaming GF63</p></a>
                                                <span class="font-bold text-red-700">18.899.100₫</span>
                                            </div>
                                        </div>        
                                    </div>
                                   
                                    <div class="py-8">
                                        <a href="">
                                            <img class="w-[230px] float-right pr-8"
                                            src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/21/637783691776655508_F-H4_248x248.png">
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li class="group">
                                <a href="" class="nav-bar">
                                    <i class="fab fa-apple"></i>
                                    <span class="">apple</span>
                                </a>
                                <div class="grid grid-cols-3 gap-x-64 mt-0 w-full border-2 max-h-[300px] absolute left-0  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                    <ul class="menu-item w-[500px]">
                                        <li class="menu-item-title">CÁC SẢN PHẨM APPLE</li>
                                        <div class="menu-item-info grid grid-cols-3 text-sm leading-7 mb-4">
                                            <li><a href="">iPhone</a></li>
                                            <li><a href="">iPad</a></li>
                                            <li><a href="">MacBook</a></li>
                                            <li><a href="">Apple Watch</a></li>
                                            <li><a href="">Apple Tai nghe</a></li>
                                            <li><a href="">iMac</a></li>
                                            <li><a href="">Mac Mini</a></li>
                                            <li><a href="">Sạc & Cáp</a></li>
                                            <li><a href="">Ốp lưng & Bao da</a></li>
                                            <li><a href="">Apple TV</a></li>
                                            <li><a href="">Bàn phím</a></li>
                                            <li><a href="">Chuột & Trackpad</a></li>
                                            <li><a href="">AirTag</a></li>
                                            <li><a href="">Hàng dự án</a></li>
                                        </div>
                                    </ul>
                                    <div class="text-black">
                                        <p class="pl-5 pt-3 uppercase ml-6 font-bold">Bán chạy nhất</p>
                                        <div class="flex w-[400px]">
                                            <div class="w-[100px] ml-8 mt-2">
                                                <a href="">
                                                    <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673213598401263_iphone-13-pro-max-dd-1.jpg">
                                                </a>
                                            </div>
                                            <div>
                                                <a href=""><p class="text-sm mb-2 mt-2">iPhone 13 Pro Max 128GB</p></a>
                                                <span class="font-bold text-red-700">31.490.000 ₫</span>
                                            </div>
                                        </div>
                                        <div class="flex w-[400px]">
                                            <div class="w-[100px] ml-8 mt-2">
                                                <a href="">
                                                    <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673224696649012_iphone-13-dd-1.jpg">
                                                </a>
                                            </div>
                                            <div>
                                                <a href=""><p class="text-sm mb-2 mt-2">iPhone 13 128GB</p></a>
                                                <span class="font-bold text-red-700">22.990.000 ₫</span>
                                            </div>
                                        </div>        
                                    </div>
                                   
                                    <div class="py-8">
                                        <a href="">
                                            <img class="w-[230px] float-right pr-8"
                                            src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/21/637783204821197848_F-H4_248x248.png">
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li class="group">
                                <a href="" class="nav-bar">
                                    <i class="fas fa-desktop"></i>
                                    <span class="">pc-linh kiện</span>
                                </a>
                                <div class=" gap-x-64 mt-0 border-2 max-h-[300px] absolute w-[200px]  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                    <ul class="menu-item">
                                        <div class="menu-item-info text-sm leading-7 mb-4">
                                            <li><a href="">iPhone</a></li>
                                            <li><a href="">iPad</a></li>
                                            <li><a href="">MacBook</a></li>
                                            <li><a href="">Apple Watch</a></li>
                                            <li><a href="">Apple Tai nghe</a></li>
                                            <li><a href="">iMac</a></li>
                                        </div>
                                    </ul>
                                </div>        
                            </li>

                            <li class="group">
                                <a href="" class="nav-bar">
                                    <i class="fas fa-headphones"></i>
                                    <span class="">phụ kiện</span>
                                </a>
                                <div class="grid grid-cols-3 gap-x-64 mt-0 w-full border-2 max-h-[300px] absolute left-0  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                    <ul class="menu-item w-[500px]">
                                        <li class="menu-item-title">CÁC SẢN PHẨM PHỤ KIỆN</li>
                                        <div class="menu-item-info grid grid-cols-3 text-sm leading-7 mb-4">
                                            <li><a href="">Router</a></li>
                                            <li><a href="">Bao da ốp lưng</a></li>
                                            <li><a href="">Sạc dự phòng</a></li>
                                            <li><a href="">Thẻ nhớ</a></li>
                                            <li><a href="">Miếng dán màn hình</a></li>
                                            <li><a href="">Loa</a></li>
                                            <li><a href="">USB - Ổ cứng</a></li>
                                            <li><a href="">Sạc cáp</a></li>
                                            <li><a href="">Tai nghe</a></li>
                                            <li><a href="">Chuột</a></li>
                                            <li><a href="">Bàn phím</a></li>
                                            <li><a href="">Bàn ghế gaming</a></li>
                                            <li><a href="">Balo - Túi xách</a></li>
                                            <li><a href="">TV BOX</a></li>
                                            <li><a href="">Phụ kiện khác</a></li>
                                            <li><a href="">Phụ kiện khẩu trang lọc khí</a></li>
                                            <li><a href="">Bàn phím</a></li>
                                        </div>
                                    </ul>
                                    <div class="text-black">
                                        <p class="pl-5 pt-3 uppercase ml-6 font-bold">Bán chạy nhất</p>
                                        <div class="flex w-[400px]">
                                            <div class="w-[100px] ml-8 mt-2">
                                                <a href="">
                                                    <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/6/17/636963759454365620_HASP-00554636-dd-1.png">
                                                </a>
                                            </div>
                                            <div>
                                                <a href=""><p class="text-sm mb-2 mt-2 ml-5">Combo Loa Bluetooth Karaoke + Mic không dây</p></a>
                                                <span class="font-bold text-red-700 ml-5">1.395.000 ₫</span>
                                            </div>
                                        </div>
                                        <div class="flex w-[400px]">
                                            <div class="w-[100px] ml-8 mt-2 ">
                                                <a href="">
                                                    <img src="https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/1/14/637146111983706760_Trip10000_Black.jpg">
                                                </a>
                                            </div>
                                            <div>
                                                <a href=""><p class="text-sm mb-2 mt-2 ml-7">Pin sạc dự phòng Quick Charge Li-polymer 10000mAH</p></a>
                                                <span class="font-bold text-red-700 ml-7">449.000 ₫</span>
                                            </div>
                                        </div>        
                                    </div>
                                   
                                    <div class="py-8">
                                        <a href="">
                                            <img class="w-[230px] float-right pr-8"
                                            src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/21/637783204821197848_F-H4_248x248.png">
                                        </a>
                                    </div>
                                </div>
                            </li>
                           
                            <li class="group">
                                <a href="" class="nav-bar">
                                    <i class="fas fa-undo-alt"></i>
                                    <span class="">máy cũ giá rẻ</span>
                                </a>       
                            </li>

                            <li class="group">
                                <a href="" class="nav-bar">
                                    <i class="fas fa-laptop-house"></i>
                                    <span class="">hàng gia dụng</span>
                                </a>       
                            </li>

                            <li class="group">
                                <a href="" class="nav-bar">
                                    <i class="fas fa-sd-card"></i>
                                    <span class="">sim thẻ</span>
                                </a>       
                            </li>

                            <li class="group">
                                <a href="" class="nav-bar">
                                    <i class="fas fa-percent"></i>
                                    <span class="">khuyễn mãi</span>
                                </a>       
                                <div class=" gap-x-64 mt-0 border-2 max-h-[300px] absolute w-[200px]  bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-3 transition-all decoration-slate-500 ">
                                    <ul class="menu-item">
                                        <div class="menu-item-info text-sm leading-7 mb-4">
                                            <li><a href="">Thông tin trao thưởng</a></li>
                                            <li><a href="">Tất cả khuyến mại</a></li>
                                        </div>
                                    </ul>
                                </div>        
                            </li>

                            <li class="group">
                                <a href="" class="nav-bar">
                                    <i class="fas fa-piggy-bank"></i>
                                    <span class="">trả góp 0%</span>
                                </a>       
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    },
};

export default Header;