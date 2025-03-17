import { useEffect, useState } from "react";
import "@/styles/equipment.css";

const Grid = ({ folder = "/src/assets/gym_images/equipment", count = 25 }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageList = [[], [], []];
    for (let i = 1; i <= count; i++) {
      let index = (i - 1) % 3;
      imageList[index].push(`${folder}/${i}.jpg`);
    }
    setImages(imageList);
  }, [count]);

  return (
    <div className="flex justify-center pt-30 gap-5 w-[60%] gallery-images relative">
      {images.map((image, index) => {
        return (
          <div className="flex flex-col gap-5" key={index}>
            {image.map((imgg, index) => {
              return (
                <div key={index} className="relative gallery-img transition hover:scale-[1.1]">
                  <img
                    className="transition-all w-[300px] object-contain rounded-2xl hover:rounded-md duration-300"
                    src={imgg}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

function EquipmentPage() {
  return (
    <div className="flex justify-center bg-background p-10">
      <Grid />
    </div>
  );
}

export default EquipmentPage;
