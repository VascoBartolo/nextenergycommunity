import { Link } from "react-router-dom";
import communityLogo from "@/assets/nxe_com_colorido.png";

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

const Logo = ({ className = "", imgClassName = "" }: LogoProps) => {
  return (
    <Link
      to="/"
      aria-label="Nextenergy Community — início"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      <img
        src={communityLogo}
        alt="Nextenergy Community"
        className={`block h-9 md:h-10 w-auto object-contain ${imgClassName}`}
      />
    </Link>
  );
};

export default Logo;
