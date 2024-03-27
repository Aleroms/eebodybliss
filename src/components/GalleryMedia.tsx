import { useState, useEffect, useRef } from "react";
import { Galleria } from "primereact/galleria";
import Gallery_Data from "../assets/data/gallery.json";

interface Gallery {
  title: string;
  content: string;
  image: string;
  thumbnail: string;
}
export default function CustomContentDemo() {
  const [images, setImages] = useState<Gallery[]>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const galleria = useRef<Galleria>(null);

  useEffect(() => {
    setImages(Gallery_Data);
  }, []);

  const itemTemplate = (item: Gallery) => {
    return (
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item: Gallery) => {
    return (
      <img src={item.thumbnail} alt={item.title} style={{ display: "block" }} />
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Galleria
        ref={galleria}
        value={images}
        numVisible={7}
        style={{ maxWidth: "850px" }}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
        circular
        fullScreen
        showItemNavigators
        showThumbnails={false}
        thumbnail={thumbnailTemplate}
        item={itemTemplate}
      />
      <div className="grid" style={{ maxWidth: "400px" }}>
        {images &&
          images.map((image, index) => {
            const imgEl = (
              <img
                src={image.image}
                alt={image.title}
                style={{ cursor: "pointer", content: "cover" }}
                width={100}
                height={100}
                onClick={() => {
                  setActiveIndex(index);
                  galleria.current!.show();
                }}
              />
            );
            return (
              <div className="col-4" key={index}>
                {imgEl}
              </div>
            );
          })}
      </div>
    </div>
  );
}
