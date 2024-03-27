// import { useState } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

interface Service {
  name: string;
  image: string;
}

function ServiceCarousel() {
  const services = [
    {
      name: "s1",
      image: "service.png",
    },
    {
      name: "s2",
      image: "service.png",
    },
    {
      name: "s3",
      image: "service.png",
    },
    {
      name: "s4",
      image: "service.png",
    },
    {
      name: "s5",
      image: "service.png",
    },
    {
      name: "s6",
      image: "service.png",
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const serviceTemplate = (service: Service) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`/${service.image}`}
            alt={service.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">{service.name}</h4>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button label="view more" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={services}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={serviceTemplate}
      />
    </div>
  );
}
export default ServiceCarousel;
