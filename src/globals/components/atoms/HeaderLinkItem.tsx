import type { linksProps } from "@/globals/utils/links";
import { Button } from '../ui/button';

interface LinkItemProps {
    link: linksProps;
    closeMenu?: () => void;
}

const HeaderLinkItem = ({link, closeMenu}: LinkItemProps) => {
    
  return (
    <li className="text-nowrap">
      <a href={link.href}>
        <Button
          size={"default"}
          onClick={closeMenu}
          variant={"ghost"}
          className="hover:bg-secondary lg:hover:bg-card justify-start w-full lg:w-fit cursor-pointer "
        >
          {link.label}
        </Button>
      </a>
    </li>
  );
};

export default HeaderLinkItem;