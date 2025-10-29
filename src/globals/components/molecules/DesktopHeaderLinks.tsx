import { links } from '@/globals/utils/links';
import HeaderLinkItem from '../atoms/HeaderLinkItem';

const DesktopHeaderLinks = () => {
  return (
    <nav className='hidden lg:block'>
      <ul>
        <ul className="flex">
          {links.map((link) => (
            <HeaderLinkItem key={link.label} link={link} />
          ))}
        </ul>
      </ul>
    </nav>
  );
}

export default DesktopHeaderLinks