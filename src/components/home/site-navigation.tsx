import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function SiteNavigation() {
  return (
    <nav className="hidden md:block mt-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a
              href="/"
              className="px-4 py-2 text-sm font-medium hover:text-green-600"
            >
              Trang chủ
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger><a href="/san-pham">Sản phẩm</a></NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[400px] grid-cols-2">
                <a
                  href="/products/cpu"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">CPU</div>
                  <p className="text-sm text-gray-600">Bộ vi xử lý</p>
                </a>
                <a
                  href="/products/gpu"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Card màn hình</div>
                  <p className="text-sm text-gray-600">Card màn hình</p>
                </a>
                <a
                  href="/products/ram"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Bộ nhớ</div>
                  <p className="text-sm text-gray-600">RAM & Ổ cứng</p>
                </a>
                <a
                  href="/products/motherboard"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Mainboard</div>
                  <p className="text-sm text-gray-600">Mainboard & Chipset</p>
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Dịch vụ</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[300px]">
                <a
                  href="/dich-vu/sua-chua"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Sửa chữa</div>
                  <p className="text-sm text-gray-600">Sửa chữa máy tính tại nhà</p>
                </a>
                <a
                  href="/dich-vu/nap-muc"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Nạp mực máy in</div>
                  <p className="text-sm text-gray-600">Nạp mực máy in tại nhà</p>
                </a>
                <a
                  href="/dich-vu/cai-dat"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Cài đặt máy in</div>
                  <p className="text-sm text-gray-600">Cài đặt máy in tại nhà</p>
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              href="/bang-gia"
              className="px-4 py-2 text-sm font-medium hover:text-green-600"
            >
              Bảng giá
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              href="/lien-he"
              className="px-4 py-2 text-sm font-medium hover:text-green-600"
            >
              Liên hệ
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
