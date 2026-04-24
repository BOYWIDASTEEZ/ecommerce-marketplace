import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface NavbarSidebarProps {
  items: NavbarItem[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, isOpen, onOpenChange }: NavbarSidebarProps) => {
  return(
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 duration-300">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>
            Menu
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
         {items.map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            onClick={() => onOpenChange(false)}
            className="w-full flex items-center p-4 hover:bg-black hover:text-white text-left text-base font-medium"
          >
            {item.children}
          </Link>
        ))}
        <div className="border-t">
          <Link href='/sign-in' className="w-full flex items-center p-4 hover:bg-black hover:text-white text-left text-base font-medium" onClick={() => onOpenChange(false)}>
            Log in
          </Link>
          <Link href='/sign-up' className="w-full flex items-center p-4 hover:bg-black hover:text-white text-left text-base font-medium" onClick={() => onOpenChange(false)}>
            Start selling
          </Link>
        </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};