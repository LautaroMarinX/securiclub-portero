import { links } from "@/globals/utils/links";
import type { linksProps } from "@/globals/utils/links";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import {useHeader} from "@/globals/hooks/useHeader";
import LinkItem from "../atoms/HeaderLinkItem";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

const Links = () => {

  const {handleOpen, isOpen, closeMenu} = useHeader();

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={handleOpen}>
        <SheetTrigger className="lg:hidden">
          <Button
            size="icon"
            variant={"outline"}
            className="cursor-pointer rounded-md"
            onClick={handleOpen}
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>Menú</SheetHeader>
          <nav className="p-2 w-full">
            <ul className="flex flex-col">
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
