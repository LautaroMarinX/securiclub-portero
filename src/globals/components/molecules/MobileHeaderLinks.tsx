import { links } from "@/globals/utils/links";
import type { linksProps } from "@/globals/utils/links";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import {useHeader} from "@/globals/hooks/useHeader";
import LinkItem from "../atoms/HeaderLinkItem";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const Links = () => {

  const {handleOpen, isOpen, closeMenu} = useHeader();

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={handleOpen}>
        <SheetTitle className="hidden">Menu</SheetTitle>
        <SheetDescription className="hidden">Menu hamburguesa para mobile</SheetDescription>
        <SheetTrigger className="lg:hidden" asChild>
          <div
            onClick={handleOpen}
            className="bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-10 flex items-center justify-center rounded-sm"
          >
            <MenuIcon size={16} />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>Menú</SheetHeader>
          <nav className="p-2 w-full">
            <ul className="flex flex-col gap-1">
              {links.map((link: linksProps) => (
                <LinkItem closeMenu={closeMenu} key={link.label} link={link} />
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );



};

export default Links;
