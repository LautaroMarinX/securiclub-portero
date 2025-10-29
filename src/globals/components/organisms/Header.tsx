import RequestDemo from "../atoms/RequestDemo";
import DesktopHeaderLinks from "../molecules/DesktopHeaderLinks";
import MobileHeaderLinks from "../molecules/MobileHeaderLinks";


export const Header = () => {
  return (
    <header className="fixed top-0 w-screen bg-secondary z-50 shadow">
      <div className="container mx-auto flex justify-between items-center lg:grid lg:grid-cols-3">

        {/* Logo */}
        <a className="flex items-center" href="/#top">
          <img src="/logo.png" className="size-12" alt="Logo de Securi Club" />
        </a>

        <DesktopHeaderLinks />

        {/* Botón solicitar demo y menú móvil*/}
        <div className="flex justify-end items-center gap-2">
          <RequestDemo />
          <MobileHeaderLinks />
        </div>
      </div>
    </header>
  );
}

export default Header