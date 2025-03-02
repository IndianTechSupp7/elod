import { useNavigate } from "react-router-dom";
import main_img from "../assets/gym_images/2.png";
import secoundary_img from "../assets/gym_images/3.png";
import OfferCard from "../components/OfferCard";
import Footer from "../components/Footer";
import OpenSection from "../components/open";
import TrainersComp from "../components/trainers";
import "../styles/home.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="select-none home-page flex items-center justify-center flex-col bg-background">
      <section className="relative max-h-[800px] w-full">
        <img
          className="main-img max-h-[800px] w-full object-cover object-[0%_10%]"
          src={main_img}
          alt=""
        />
        <div
          className="w-full h-full absolute top-0 left-0 
        bg-gradient-to-b from-background via-gradient-start to-background"
        />
        <span className="absolute bottom-10 pl-10 lg:text-3xl text-xl font-psemibold tracking-[0.17em] flex flex-row justify-center w-full">
          Legjobb{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text pl-2.5 pr-2.5 md:text-3xl text-2xl">
            GYM
          </span>{" "}
          amit talalsz itten erre
        </span>
      </section>
      <section className="flex h-full w-full bg-background xl:p-30 p-10 lg:flex-row flex-col-reverse justify-between">
        <div className="w-full flex flex-col lg:pr-[20%] lg:p-10 pt-10 lg:h-[500px] justify-between">
          <p
            id="open"
            className="lg:text-xl font-pregular pb-20
          "
          >
            Modren felszereltés, barátságos emberek, professzionális személyi
            dezők.
          </p>
          <OpenSection></OpenSection>
        </div>
        <div
          onClick={() => navigate("/equipment")}
          className="body-image-wrapper relative font-psemibold text-3xl w-full"
        >
          <img className="body-image" src={secoundary_img} alt="" />
        </div>
      </section>
      <section>
        <TrainersComp></TrainersComp>
      </section>
      <section className="w-full h-full bg-background flex flex-col items-center">
        <div className="w-full flex justify-center p-10 text-3xl font-psemibold">
          Bérlet Ajánlatok
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-around items-center lg:max-w-7xl p-10 h-full gap-20">
          <OfferCard
            title="Diák"
            price="6.2$"
            style="w-sm lg:h-[500px] lg:text-2xl"
          >
            <ul>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ul>
          </OfferCard>
          <OfferCard
            title="Normál"
            price="12.6$"
            style="w-sm lg:h-[500px] lg:text-2xl"
          >
            <ul>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ul>
          </OfferCard>
          <OfferCard
            title="Professzionális"
            price="17.8$"
            style="w-sm lg:h-[500px] lg:text-2xl"
          >
            <ul>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ul>
          </OfferCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
