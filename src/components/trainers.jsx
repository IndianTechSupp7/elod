import React from "react";
import VideoOnView from "./video";
import SlideInText from "./slideInText";
import v1 from "../assets/gym_images/gym_media/2.mp4";
import "../styles/video.css";
import { useNavigate } from "react-router-dom";

function TrainersComp() {
  const navigate = useNavigate();
  return (
    <section className="relative">
      <SlideInText className="absolute left-[50%] top-[65%] translate-x-[-50%] z-10 font-bold" delay={0.3} duration={0.5}>
        <div
          className="relative tariner-text text-white text-7xl hover:scale-[1.1] transition ease-in-out duration-200
        hover:bg-gradient-to-r from-cyan-300 to-indigo-500 hover:text-transparent hover:bg-clip-text"
          onClick={() => navigate("/trainers")}
        >
          Jól képzett Személyiedzők
        </div>
      </SlideInText>
      <div className="relative">
        <VideoOnView src={v1} width="100%" style="relative max-h-[800px] object-cover" />
        <div
          className="w-full h-full absolute top-0 left-0
        bg-gradient-to-b via-gradient-start to-background"
        ></div>
      </div>
    </section>
  );
}

export default TrainersComp;
