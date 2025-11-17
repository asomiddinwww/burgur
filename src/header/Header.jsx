import logoimg from "../assets/img/burger_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  function bars() {
    document.querySelector(".sidebar").style.display = "flex";
  }

  function closeSidebar() {
    document.querySelector(".sidebar").style.display = "none";
  }

  return (
    <header className="w-full bg-[#13382b] p-6">
      <div className="max-w-[1470px] m-auto pt-2 pb-2 flex items-center justify-between gap-5">
        <a href="/">
          <img
            className="max-w-[200px] max-[745px]:w-[50vw]"
            src={logoimg}
            alt="logo"
          />
        </a>

        <div className="mr-50 max-[742px]:hidden">
          <ul className="flex items-center gap-15 text-white text-[21px]">
            <li className="hover:text-[#d7cbcb] hover:scale-103">
              <Link to="/about" className="font-sansita">
                Home
              </Link>
            </li>

            <li className="hover:text-[#d7cbcb] hover:scale-104">
              <Link to="/menu">Menu</Link>
            </li>

            <li className="hover:text-[#d7cbcb] hover:scale-104">
              <Link to="/about">About</Link>
            </li>

            <li className="hover:text-[#d7cbcb] hover:scale-104">
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <div></div>
        <div className="sidebar z-999 fixed hidden top-0 p-20 flex flex-col items-center justify-center right-0 w-full h-[100%] bg-[#13382b]">
          <button onClick={closeSidebar} className="absolute top-9 right-6">
            <i className="fa-solid fa-xmark text-white text-2xl"></i>
          </button>

          <Link to="/">
            <img
              className="max-w-[355px] max-[400px]:w-[80vw]"
              src={logoimg}
              alt="logo"
            />
          </Link>

          <ul className="flex items-center flex-col gap-6 text-white text-[21px] p-10">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <button onClick={bars} className="min-[745px]:hidden">
          <i className="fa-solid fa-bars text-white text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
