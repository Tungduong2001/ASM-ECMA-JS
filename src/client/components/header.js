const Header = {
    render() {
        return /* html */`
            <header class="">
                <div class="header-top bg-red-700 flex justify-between h-[80px] w-[1200px] m-auto">
                    <figure class="logo pt-5">
                        <a href="/">
                            <img src="https://fptshop.com.vn/Content/Landing/logo-mb.png" width="150px">
                        </a>
                    </figure>
                    <form action="" class="w-[700px] mt-5 pl-10 flex">
                        <input type="text" class="h-12 w-10/12 pl-3"
                            placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm">
                        <button class="h-10"><i
                                class="fas fa-search bg-[#333333] text-white pt-5 pb-3 px-5 mb-5"></i></button>
                    </form>
                    <div class="flex mt-5 text-center">
                        <div class="news pr-5">
                            <a href="">
                                <i class="far fa-file-alt text-white"></i>
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
                            <i class="fas fa-shopping-cart text-white"></i>
                            <p class="text-white text-xs">Giỏ hàng</p>
                        </div>
                    </div>
                </div>
                <div class="min-w-full m-auto bg-[#252525]">
                    <nav class="uppercase w-[1200px] m-auto  text-white" id="navbar">
                        <ul class="flex text-center justify-between py-3">
                            <li><a href=""><i class="fas fa-mobile-alt"></i> điện thoại</a></li>
                            <li><a href=""><i class="fas fa-laptop"></i> laptop</a></li>
                            <li><a href=""><i class="fab fa-apple"></i> apple</a></li>
                            <li><a href=""><i class="fas fa-desktop"></i> pc-linh kiện</a></li>
                            <li><a href=""><i class="fas fa-headphones"></i> phụ kiện</a></li>
                            <li><a href=""><i class="fas fa-undo-alt"></i> máy cũ giá rẻ</a></li>
                            <li><a href=""><i class="fas fa-laptop-house"></i> hàng gia dụng</a></li>
                            <li><a href=""><i class="fas fa-sd-card"></i> sim thẻ</a></li>
                            <li><a href=""><i class="fas fa-percent"></i> khuyễn mãi</a></li>
                            <li><a href=""><i class="fas fa-piggy-bank"></i> trả góp 0%</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    },
};

export default Header;