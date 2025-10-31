import { useHeader } from "@/globals/hooks/useHeader";
import RequestDemo from "../atoms/RequestDemo";
import DesktopHeaderLinks from "../molecules/DesktopHeaderLinks";
import MobileHeaderLinks from "../molecules/MobileHeaderLinks";


export const Header = () => {

  const { useIsAtTop } =  useHeader();

  return (
    <header
      className={`fixed top-0 duration-300 transition-all w-screen ${useIsAtTop() ? "bg-transparent" : "bg-primary/5 backdrop-blur-xl shadow"} z-50`}
    >
      <div className="container mx-auto flex justify-between items-center lg:grid lg:grid-cols-3">
        {/* Logo */}
        <a className="flex items-center w-fit " href="/#top">
          <img
            src="/logo.png"
            className="size-12 hover:opacity-75 duration-300"
            alt="Logo de Securi Club"
          />
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