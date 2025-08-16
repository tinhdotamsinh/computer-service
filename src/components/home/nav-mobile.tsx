import {
  Sheet,
  SheetTrigger,
  SheetContent
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
export default function NavMobile() {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="sm" className="md:hidden">
        <Menu className="h-4 w-4" />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <nav className="flex flex-col space-y-4 mt-8 pl-3">
        <a href="/" className="text-lg font-medium">Trang chủ</a>
        <a href="/san-pham" className="text-lg font-medium">Sản phẩm</a>
        <a href="/bang-gia" className="text-lg font-medium">Bảng giá</a>
        <a href="/dich-vu" className="text-lg font-medium">Dịch vụ</a>
        <a href="/lien-he" className="text-lg font-medium">Liên hệ</a>
      </nav>
    </SheetContent>
  </Sheet>
  )
}
