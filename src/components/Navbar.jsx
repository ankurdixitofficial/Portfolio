import logo from "../assets/l3.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="m-8 flex flex-shrink-5 items-center">
            <img className="logo mx-14 w-12" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagram />
        </div>
    </nav>
  );
};

export default Navbar;