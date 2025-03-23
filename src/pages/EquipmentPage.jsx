import { useEffect, useRef, useState } from "react";
import "../styles/equipment.css";

// képek sorbarendezéséhez (alapjáraton a sort.py script rendezi az egészet)
const handleImages = ({ count, folder, setImages }) => {
  const sortedImages = useRef([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageList = [];
      const imgList = [[], [], []];
      for (let i = 1; i <= count; i++) {
        imageList.push(`${folder}/${i}.jpg`);
      }
      const withHeights = await Promise.all(
        imageList.map(
          (img) =>
            new Promise((resolve) => {
              const image = new Image();
              image.src = img;
              image.onload = () =>
                resolve({ src: img, height: image.naturalHeight });
            })
        )
      );
      const sorted = withHeights.sort((a, b) => a.height - b.height);
      sortedImages.current = sorted;

      for (let i = 1; i <= sortedImages.current.length; i++) {
        let index = (i - 1) % 3;
        imgList[index].push(sortedImages.current[i]?.src);
      }
      setImages(imgList);
    };

    loadImages();
  }, []);
};

const Grid = ({ folder = "/src/assets/gym_images/equipment", count = 25 }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let imgList = [[], [], []]
    for (let i = 1; i <= count; i++) {
      let index = (i - 1) % 3;
      imgList[index]?.push(`${folder}/${i}.jpg`);
    }
    setImages(imgList)
  }, []);

  // handleImages({ count, folder, setImages });

  return (
    <div className="flex justify-center pt-30 gap-5 w-[60%] gallery-images relative">
      {images.map((image, index) => {
        return (
          <div className="flex flex-col gap-5" key={index}>
            {image.map((imgg, index) => {
              return (
                <div
                  key={index}
                  className="relative gallery-img transition hover:scale-[1.1]"
                >
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
    <div className="flex justify-center bg-background p-20 pb-40">
      <Grid />
    </div>
  );
}

export default EquipmentPage;
