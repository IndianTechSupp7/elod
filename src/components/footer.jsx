import { icons } from "../constans";

function Footer() {
  return (
    <footer className="p-10 pl-20 w-full flex flex-row items-end bg-black font-pregular text-lg relative">
      <ul className="text-gray-500 w-[100px]">
        <li className="text-text">Elérhetőségek</li>
        <li className="pt-2">email</li>
        <li className="pt-2">tel</li>
        <li className="pt-2">asdd</li>
      </ul>
      <ul className="w-[100px] text-gray-500">
        <li className="pt-2">example@email.com</li>
        <li className="pt-2">+36305555555</li>
        <li className="pt-2">igen</li>
      </ul>
      <section className="flex w-full justify-center gap-25 p-5 absolute left-0 top-0">
        <a href="https://instagram.com" target="_blank">
          <img
            className="w-[2rem] hover:scale-[1.2] duration-100 ease-in"
            src={icons.instagram}
            alt=""
          />
        </a>
        <a href="https://facebook.com" target="_blank">
          <img
            className="w-[2rem] hover:scale-[1.2] duration-100 ease-in"
            src={icons.facebook}
            alt=""
          />
        </a>
        <a href="https://discord.com" target="_blank">
          <img
            className="w-[2rem] hover:scale-[1.2] duration-100 ease-in"
            src={icons.discord}
            alt=""
          />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
