import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { Link as ScrollTo, scroller } from "react-scroll";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNyitvatartasClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("open", { smooth: true, duration: 500 });
      }, 100); // Small delay to ensure the page has loaded
    } else {
      scroller.scrollTo("open", { smooth: true, duration: 500 });
    }
  };
  return (
    <div className="select-none bg-transparent flex justify-between text-text pt-7 pl-10 pr-30 absolute w-full top-0 left-0 z-20">
      <Link
        to="/"
        className="bg-transparent text-text bg-clip-text font-bold text-3xl
      transition duration-300 ease-out hover:scale-140 hover:bg-gradient-to-r from-cyan-300 to-indigo-500 hover:text-transparent"
      >
        GYM
      </Link>
      <div className="flex">
        <button
          onClick={handleNyitvatartasClick}
          className="nav-element text-xl"
        >
          <li>Nyitvatartás</li>
        </button>
        <Link className={"nav-element text-xl"} to="/register">
          <li>Bérlet</li>
        </Link>
        <Link className={"nav-element text-xl"} to="/trainers">
          <li>Személyi edzők</li>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
