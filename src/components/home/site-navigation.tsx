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
            <NavigationMenuTrigger>Sản phẩm</NavigationMenuTrigger>
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
                  href="/services/repair"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Sửa chữa</div>
                  <p className="text-sm text-gray-600">Sửa chữa máy tính</p>
                </a>
                <a
                  href="/services/upgrade"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Nâng cấp</div>
                  <p className="text-sm text-gray-600">Nâng cấp máy tính</p>
                </a>
                <a
                  href="/services/consultation"
                  className="block p-3 rounded-md hover:bg-gray-50"
                >
                  <div className="font-medium">Tư vấn</div>
                  <p className="text-sm text-gray-600">Tư vấn máy tính</p>
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a
              href="/shop"
              className="px-4 py-2 text-sm font-medium hover:text-green-600"
            >
              Cửa hàng
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              href="/policy"
              className="px-4 py-2 text-sm font-medium hover:text-green-600"
            >
              Chính sách
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a
              href="/contact"
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
